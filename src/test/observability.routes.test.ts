import { mkdtemp } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { describe, expect, it } from "bun:test";

import { createApplication } from "@/api/server";
import { ObservabilityStore } from "@/infra/observability";
import { RunStore } from "@/infra/run-store";
import { SqliteAuditStore } from "@/infra/sqlite-audit-store";
import type {
  ExistingRemoteFile,
  ListSourceOptions,
  RunReport,
  TenderOptionUpsertClient,
  TenderOptionUpsertSource,
  UploadFileRequest,
} from "@/types/upsert";
import type { AppEnv } from "@/config/env";

const env: AppEnv = {
  AWS_ACCESS_KEY_ID: "key",
  AWS_SECRET_ACCESS_KEY: "secret",
  S3_BUCKET: "bucket",
  ENRICHED_DATA_PATH: "enriched/",
  CLICKHOME_API_BASE_URL: "https://example.com/API",
  CLICKHOME_API_KEY: "token",
  CLICKHOME_BUSINESS_UNIT_ID: 1,
  CLICKHOME_RESOURCE_CODE: 5,
};

async function waitForRun(
  store: RunStore,
  runId: string,
  timeoutMs = 3000,
): Promise<RunReport> {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    const run = await store.getRun(runId);
    if (run && ["completed", "failed", "cancelled"].includes(run.status)) {
      return run;
    }

    await Bun.sleep(20);
  }

  throw new Error(`Timed out waiting for run ${runId}`);
}

class FakeSource implements TenderOptionUpsertSource {
  async *listJsonObjects(_options: ListSourceOptions) {
    yield { key: "enriched/product.json" };
  }

  async readJsonObject(): Promise<unknown> {
    return {
      externalRef: "SKU-1",
      optionName: "Product 1",
      categoryId: 7,
      attachments: [
        {
          fileName: "spec.pdf",
          url: "https://cdn.example.com/files/spec.pdf",
        },
      ],
    };
  }

  async readBinaryObject(): Promise<Uint8Array> {
    return new Uint8Array();
  }
}

class SlowSource extends FakeSource {
  override async readJsonObject(): Promise<unknown> {
    await Bun.sleep(30);
    return super.readJsonObject();
  }
}

class FakeClient implements TenderOptionUpsertClient {
  async listTenderOptionsByExternalRef(): Promise<Record<string, unknown>[]> {
    return [];
  }

  async createTenderOption(): Promise<Record<string, unknown>> {
    return { tenderOptionId: 42 };
  }

  async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
    return {};
  }

  async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
    return {};
  }

  async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
    return [];
  }

  async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
    return [];
  }

  async uploadTenderOptionFile(_request: UploadFileRequest): Promise<Record<string, unknown>> {
    return {};
  }
}

describe("observability routes", () => {
  it("mounts SQLite-backed run and item detail endpoints", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-observability-routes-"));
    const observability = new ObservabilityStore({
      baseDirectory: join(dir, "observability"),
    });
    const auditStore = new SqliteAuditStore({
      databasePath: join(dir, "audit.sqlite"),
    });
    const runStore = new RunStore({
      baseDirectory: join(dir, "runs"),
      observability,
      auditStore,
    });

    const { app } = createApplication({
      env,
      source: new FakeSource(),
      client: new FakeClient(),
      runStore,
      observability,
      auditStore,
    });

    const runResponse = await app.handle(
      new Request("http://localhost/upserts/tender-options/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dryRun: false,
          concurrency: 1,
          fileConcurrency: 1,
        }),
      }),
    );

    const queued = (await runResponse.json()) as {
      accepted: boolean;
      runId: string;
    };
    expect(queued.accepted).toBe(true);

    const run = await waitForRun(runStore, queued.runId);
    expect(run.status).toBe("completed");

    const detailResponse = await app.handle(
      new Request(`http://localhost/observability/runs/${queued.runId}`),
    );
    expect(detailResponse.status).toBe(200);
    const detailJson = (await detailResponse.json()) as {
      audit: {
        itemCount: number;
        artifactCount: number;
      };
    };
    expect(detailJson.audit.itemCount).toBe(1);
    expect(detailJson.audit.artifactCount).toBeGreaterThan(0);

    const itemResponse = await app.handle(
      new Request(
        `http://localhost/observability/runs/${queued.runId}/items/enriched%2Fproduct.json`,
      ),
    );
    expect(itemResponse.status).toBe(200);
    const itemJson = (await itemResponse.json()) as {
      item: {
        externalRef: string;
      };
      artifacts: Array<{
        artifactType: string;
      }>;
    };
    expect(itemJson.item.externalRef).toBe("SKU-1");
    expect(itemJson.artifacts.some((entry: { artifactType: string }) =>
      entry.artifactType === "mapped-create-payload")).toBe(true);
  });

  it("lists recent runs and streams snapshot, item, and terminal events", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-observability-stream-"));
    const observability = new ObservabilityStore({
      baseDirectory: join(dir, "observability"),
    });
    const auditStore = new SqliteAuditStore({
      databasePath: join(dir, "audit.sqlite"),
    });
    const runStore = new RunStore({
      baseDirectory: join(dir, "runs"),
      observability,
      auditStore,
    });

    const { app } = createApplication({
      env,
      source: new SlowSource(),
      client: new FakeClient(),
      runStore,
      observability,
      auditStore,
    });

    const runResponse = await app.handle(
      new Request("http://localhost/upserts/tender-options/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dryRun: false,
          concurrency: 1,
          fileConcurrency: 1,
        }),
      }),
    );

    const queued = (await runResponse.json()) as {
      accepted: boolean;
      runId: string;
    };

    const runsResponse = await app.handle(
      new Request("http://localhost/upserts/tender-options/runs?limit=1"),
    );
    expect(runsResponse.status).toBe(200);
    const runsJson = (await runsResponse.json()) as Array<{
      runId: string;
      itemCount: number;
      totals: {
        scanned: number;
      };
    }>;
    expect(runsJson).toHaveLength(1);
    expect(runsJson[0]?.runId).toBe(queued.runId);

    const streamResponse = await app.handle(
      new Request(`http://localhost/observability/runs/${queued.runId}/stream`),
    );
    expect(streamResponse.status).toBe(200);
    const streamText = await streamResponse.text();

    expect(streamText).toContain("event: snapshot");
    expect(streamText).toContain("event: item-recorded");
    expect(streamText).toContain("event: terminal");

    const run = await waitForRun(runStore, queued.runId);
    expect(run.status).toBe("completed");
  });
});
