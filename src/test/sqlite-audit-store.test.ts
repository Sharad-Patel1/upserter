import { mkdtemp } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { describe, expect, it } from "bun:test";

import { SqliteAuditStore } from "@/infra/sqlite-audit-store";
import { createEmptyTotals } from "@/types/upsert";

describe("SqliteAuditStore", () => {
  it("bootstraps the schema and summarizes runs", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-audit-store-"));
    const store = new SqliteAuditStore({
      databasePath: join(dir, "audit.sqlite"),
      now: () => new Date("2026-03-11T09:00:00.000Z"),
      uuid: () => "audit-id-1",
    });

    store.recordRun({
      runId: "run-1",
      status: "running",
      mode: "apply",
      createdAt: "2026-03-11T09:00:00.000Z",
      startedAt: "2026-03-11T09:00:00.000Z",
      options: {
        dryRun: false,
        prefix: "enriched/**/*.json",
        concurrency: 1,
        fileConcurrency: 1,
        resumeFromCheckpoint: false,
      },
      totals: createEmptyTotals(),
      checkpoint: {},
      items: [],
    });

    const summary = store.getRunSummary("run-1");
    expect(summary.run?.runId).toBe("run-1");
    expect(summary.itemCount).toBe(0);
    expect(summary.stepEventCount).toBe(0);
    expect(summary.artifactCount).toBe(0);
  });

  it("redacts secrets in stored HTTP exchanges", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-audit-store-"));
    const store = new SqliteAuditStore({
      databasePath: join(dir, "audit.sqlite"),
      now: () => new Date("2026-03-11T09:00:00.000Z"),
      uuid: () => "audit-id-2",
    });

    store.recordRun({
      runId: "run-2",
      status: "running",
      mode: "apply",
      createdAt: "2026-03-11T09:00:00.000Z",
      options: {
        dryRun: false,
        prefix: "enriched/**/*.json",
        concurrency: 1,
        fileConcurrency: 1,
        resumeFromCheckpoint: false,
      },
      totals: createEmptyTotals(),
      checkpoint: {},
      items: [],
    });

    store.recordRunItem("run-2", {
      key: "enriched/product.json",
      externalRef: "SKU-1",
      action: "create",
      files: {
        listedExisting: 0,
        uploaded: 0,
        skippedExisting: 0,
        failed: 0,
        wouldUpload: 0,
      },
      startedAt: "2026-03-11T09:00:00.000Z",
      finishedAt: "2026-03-11T09:00:00.000Z",
      latencyMs: 0,
    });

    store.recordHttpExchange({
      context: {
        runId: "run-2",
        itemKey: "enriched/product.json",
        externalRef: "SKU-1",
        step: "create.request",
      },
      requestId: "request-1",
      method: "POST",
      path: "V2/AdminSetup/TenderOptions",
      url: "https://example.com/API/V2/AdminSetup/TenderOptions",
      attempt: 1,
      status: 500,
      requestHeaders: {
        ClickHomeApiToken: "secret-token",
      },
      requestBody: {
        ApiKey: "raw-api-key",
        nestedToken: "secret-value",
      },
      responseHeaders: {
        Authorization: "Bearer abc",
      },
      responseBody: {
        message: "failure",
      },
      error: "failed",
    });

    const detail = store.getRunItemDetail("run-2", "enriched/product.json");
    expect(detail.httpExchanges).toHaveLength(1);
    expect(detail.httpExchanges[0]?.requestHeaders?.ClickHomeApiToken).toBe("[REDACTED]");
    expect(
      (detail.httpExchanges[0]?.requestBody as Record<string, unknown>)?.ApiKey,
    ).toBe("[REDACTED]");
    expect(detail.httpExchanges[0]?.responseHeaders?.Authorization).toBe("[REDACTED]");
  });
});
