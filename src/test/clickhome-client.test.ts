import { mkdtemp } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { describe, expect, it } from "bun:test";

import { ClickHomeClient } from "@/infra/clickhome-client";
import { SqliteAuditStore } from "@/infra/sqlite-audit-store";
import { createEmptyTotals } from "@/types/upsert";

describe("ClickHomeClient", () => {
  it("records correlated HTTP exchanges with redacted auth headers", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-clickhome-client-"));
    const auditStore = new SqliteAuditStore({
      databasePath: join(dir, "audit.sqlite"),
      now: () => new Date("2026-03-11T10:00:00.000Z"),
    });

    auditStore.recordRun({
      runId: "run-1",
      status: "running",
      mode: "apply",
      createdAt: "2026-03-11T10:00:00.000Z",
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
    auditStore.recordRunItem("run-1", {
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
      startedAt: "2026-03-11T10:00:00.000Z",
      finishedAt: "2026-03-11T10:00:00.000Z",
      latencyMs: 0,
    });

    const responses = [
      new Response("", {
        status: 200,
        headers: {
          ClickHomeApiToken: "login-token",
        },
      }),
      new Response(JSON.stringify({ tenderOptionId: 42 }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ClickHomeApiToken: "session-token",
        },
      }),
    ];

    const client = new ClickHomeClient({
      baseUrl: "https://example.com/API",
      apiKey: "test-api-key",
      auditStore,
      fetchImpl: (async () => {
        const response = responses.shift();
        if (!response) {
          throw new Error("Unexpected extra request");
        }

        return response;
      }) as unknown as typeof fetch,
    });

    const response = await client.createTenderOption(
      {
        optionName: "Product",
      },
      {
        runId: "run-1",
        itemKey: "enriched/product.json",
        externalRef: "SKU-1",
        step: "create.request",
      },
    );

    expect(response.tenderOptionId).toBe(42);

    const detail = auditStore.getRunItemDetail("run-1", "enriched/product.json");
    expect(detail.httpExchanges).toHaveLength(1);
    expect(detail.httpExchanges[0]?.step).toBe("create.request");
    expect(Object.values(detail.httpExchanges[0]?.requestHeaders ?? {})).toContain(
      "[REDACTED]",
    );
    expect(Object.values(detail.httpExchanges[0]?.responseHeaders ?? {})).toContain(
      "[REDACTED]",
    );
    expect(detail.httpExchanges[0]?.status).toBe(200);

    const summary = auditStore.getRunSummary("run-1");
    expect(summary.httpExchangeCount).toBe(1);
  });
});
