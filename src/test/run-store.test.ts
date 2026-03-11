import { mkdtemp } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { describe, expect, it } from "bun:test";

import { RunStore } from "@/infra/run-store";
import type { RunReport } from "@/types/upsert";
import { createEmptyTotals } from "@/types/upsert";

function buildReport(runId: string): RunReport {
  return {
    runId,
    status: "running",
    mode: "dry-run",
    createdAt: new Date().toISOString(),
    options: {
      dryRun: true,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
      resumeFromCheckpoint: false,
    },
    totals: createEmptyTotals(),
    checkpoint: {
      lastProcessedKey: "enriched/start.json",
      updatedAt: new Date().toISOString(),
    },
    items: [],
  };
}

describe("RunStore", () => {
  it("stores and retrieves run reports", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-run-store-"));
    const store = new RunStore({ baseDirectory: dir });

    const report = buildReport("run-1");
    await store.createRun(report);

    const loaded = await store.getRun("run-1");
    expect(loaded).toBeDefined();
    expect(loaded?.runId).toBe("run-1");
    expect(loaded?.checkpoint.lastProcessedKey).toBe("enriched/start.json");
  });

  it("returns latest checkpoint from non-completed run", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-run-store-"));
    const store = new RunStore({ baseDirectory: dir });

    await store.createRun({
      ...buildReport("run-old"),
      checkpoint: {
        lastProcessedKey: "enriched/old.json",
        updatedAt: "2026-01-01T00:00:00.000Z",
      },
      status: "failed",
    });

    await store.createRun({
      ...buildReport("run-new"),
      checkpoint: {
        lastProcessedKey: "enriched/new.json",
        updatedAt: "2026-01-02T00:00:00.000Z",
      },
      status: "running",
    });

    const checkpoint = await store.getLatestCheckpoint();
    expect(checkpoint).toBeDefined();
    expect(checkpoint?.lastProcessedKey).toBe("enriched/new.json");
  });
});
