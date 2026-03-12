import { mkdtemp } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { describe, expect, it } from "bun:test";

import type { AppEnv } from "@/config/env";
import { HttpError } from "@/infra/clickhome-client";
import { RunStore } from "@/infra/run-store";
import { SqliteAuditStore } from "@/infra/sqlite-audit-store";
import type {
  ExistingRemoteFile,
  JsonPatchOperation,
  ListSourceOptions,
  RunReport,
  TenderOptionUpsertClient,
  TenderOptionUpsertSource,
  UploadFileRequest,
} from "@/types/upsert";
import { createEmptyTotals } from "@/types/upsert";
import { TenderOptionUpsertService } from "@/usecases/run-upsert";

const env: AppEnv = {
  AWS_ACCESS_KEY_ID: "key",
  AWS_SECRET_ACCESS_KEY: "secret",
  S3_BUCKET: "bucket",
  ENRICHED_DATA_PATH: "enriched/",
  CLICKHOME_API_BASE_URL: "https://example.com/API",
  CLICKHOME_API_KEY: "token",
  CLICKHOME_BUSINESS_UNIT_ID: 1,
  CLICKHOME_RESOURCE_CODE: 5,
  BETTER_AUTH_SECRET: "12345678901234567890123456789012",
  BETTER_AUTH_URL: "http://localhost:3001",
};

async function waitForRun(
  store: RunStore,
  runId: string,
  timeoutMs = 3000
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
  readonly listOptions: ListSourceOptions[] = [];

  constructor(private readonly payloadByKey: Record<string, unknown>) {}

  async *listJsonObjects(options: ListSourceOptions) {
    this.listOptions.push(options);
    for (const key of Object.keys(this.payloadByKey)) {
      yield { key };
    }
  }

  async readJsonObject(key: string): Promise<unknown> {
    return this.payloadByKey[key];
  }

  async readBinaryObject(key: string): Promise<Uint8Array> {
    return new TextEncoder().encode(key);
  }
}

class FakeClient implements TenderOptionUpsertClient {
  patchJsonAttempts = 0;
  patchMergeAttempts = 0;

  async listTenderOptionsByExternalRef(
    _params: { externalRef: string; vendorModel?: string },
  ): Promise<Record<string, unknown>[]> {
    return [
      {
        tenderOptionId: 11,
        optionName: "Old Name",
        visibleBySales: true,
        businessUnit: { businessUnitId: 1 },
        resourceCode: { resourceCodeId: 5 },
        tenderOptionCategory: { tenderOptionCategoryId: 7 },
      },
    ];
  }

  async createTenderOption(): Promise<Record<string, unknown>> {
    return {
      tenderOptionId: 99,
    };
  }

  async patchTenderOptionJsonPatch(
    _optionId: number,
    _patch: JsonPatchOperation[]
  ): Promise<Record<string, unknown>> {
    this.patchJsonAttempts += 1;
    return {
      tenderOptionId: 11,
    };
  }

  async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
    this.patchMergeAttempts += 1;
    return {
      tenderOptionId: 11,
    };
  }

  async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
    return [];
  }

  async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
    return [];
  }

  async uploadTenderOptionFile(
    _request: UploadFileRequest
  ): Promise<Record<string, unknown>> {
    return {};
  }
}

describe("TenderOptionUpsertService", () => {
  it("uses merge object patch as the primary update strategy", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const runStore = new RunStore({ baseDirectory: dir });

    const source = new FakeSource({
      "enriched/product-1.json": {
        externalRef: "SKU-1",
        optionName: "New Name",
        categoryId: 7,
      },
    });

    const client = new FakeClient();

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      uuid: () => "run-fallback",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    expect(run.totals.updated).toBe(1);
    expect(run.items[0]?.action).toBe("update");
    expect(run.items[0]?.audit?.patchStrategy).toBe("merge-object");
    expect(client.patchMergeAttempts).toBe(1);
    expect(client.patchJsonAttempts).toBe(0);
  });

  it("falls back to json patch when merge object patch is rejected", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const runStore = new RunStore({ baseDirectory: dir });

    const source = new FakeSource({
      "enriched/product-1.json": {
        externalRef: "SKU-1",
        optionName: "New Name",
        categoryId: 7,
      },
    });

    const client: TenderOptionUpsertClient & {
      patchJsonAttempts: number;
      patchMergeAttempts: number;
    } = {
      patchJsonAttempts: 0,
      patchMergeAttempts: 0,
      async listTenderOptionsByExternalRef() {
        return [
          {
            tenderOptionId: 11,
            optionName: "Old Name",
            visibleBySales: true,
            businessUnit: { businessUnitId: 1 },
            resourceCode: { resourceCodeId: 5 },
            tenderOptionCategory: { tenderOptionCategoryId: 7 },
          },
        ];
      },
      async createTenderOption(): Promise<Record<string, unknown>> {
        return { tenderOptionId: 99 };
      },
      async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
        client.patchJsonAttempts += 1;
        return { tenderOptionId: 11 };
      },
      async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
        client.patchMergeAttempts += 1;
        throw new HttpError("Unsupported patch format", 415, {
          error: "merge patch unsupported",
        });
      },
      async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async uploadTenderOptionFile(): Promise<Record<string, unknown>> {
        return {};
      },
    };

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      uuid: () => "run-json-fallback",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    expect(run.totals.updated).toBe(1);
    expect(run.items[0]?.audit?.patchStrategy).toBe("json-patch");
    expect(client.patchMergeAttempts).toBe(1);
    expect(client.patchJsonAttempts).toBe(1);
  });

  it("surfaces clickhome status and response body on patch failure", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const runStore = new RunStore({ baseDirectory: dir });

    const source = new FakeSource({
      "enriched/product-1.json": {
        externalRef: "SKU-1",
        optionName: "New Name",
        categoryId: 7,
      },
    });

    const client: TenderOptionUpsertClient = {
      async listTenderOptionsByExternalRef() {
        return [
          {
            tenderOptionId: 11,
            optionName: "Old Name",
            visibleBySales: true,
            businessUnit: { businessUnitId: 1 },
            resourceCode: { resourceCodeId: 5 },
            tenderOptionCategory: { tenderOptionCategoryId: 7 },
          },
        ];
      },
      async createTenderOption(): Promise<Record<string, unknown>> {
        return { tenderOptionId: 99 };
      },
      async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
        throw new HttpError("ClickHome request failed: PATCH V2/AdminSetup/TenderOptions/11", 500, {
          message: "RFC6902 patch also rejected by server.",
        });
      },
      async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
        throw new HttpError("ClickHome request failed: PATCH V2/AdminSetup/TenderOptions/11", 500, {
          message: "Object reference not set to an instance of an object.",
        });
      },
      async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async uploadTenderOptionFile(): Promise<Record<string, unknown>> {
        return {};
      },
    };

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      uuid: () => "run-http-error",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    expect(run.totals.errored).toBe(1);
    expect(run.items[0]?.action).toBe("error_runtime");
    expect(run.items[0]?.error).toContain("status 500");
    expect(run.items[0]?.error).toContain("Object reference not set");
    expect(run.items[0]?.error).toContain("RFC6902 patch also rejected");
  });

  it("resumes from latest checkpoint when requested", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const runStore = new RunStore({ baseDirectory: dir });

    await runStore.createRun({
      runId: "previous-run",
      status: "failed",
      mode: "dry-run",
      createdAt: "2026-02-18T00:00:00.000Z",
      options: {
        dryRun: true,
        prefix: "enriched/**/*.json",
        concurrency: 1,
        fileConcurrency: 1,
        resumeFromCheckpoint: false,
      },
      totals: createEmptyTotals(),
      checkpoint: {
        lastProcessedKey: "enriched/checkpoint.json",
        updatedAt: "2026-02-18T10:00:00.000Z",
      },
      items: [],
    });

    const source = new FakeSource({});
    const service = new TenderOptionUpsertService({
      env,
      source,
      client: new FakeClient(),
      runStore,
      uuid: () => "resume-run",
    });

    const queued = await service.queueRun({
      dryRun: true,
      prefix: "enriched/**/*.json",
      resumeFromCheckpoint: true,
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    expect(source.listOptions[0]?.startAfter).toBe("enriched/checkpoint.json");
  });

  it("uploads files after creating a new tender option", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const runStore = new RunStore({ baseDirectory: dir });

    const source = new FakeSource({
      "enriched/product-with-files.json": {
        externalRef: "SKU-FILES",
        optionName: "Product With Files",
        categoryId: 10,
        attachments: [
          {
            fileName: "spec.pdf",
            url: "https://cdn.example.com/files/spec.pdf",
          },
          {
            fileName: "photo.jpg",
            url: "https://cdn.example.com/files/photo.jpg",
          },
        ],
      },
    });

    const uploadedFiles: UploadFileRequest[] = [];

    const client: TenderOptionUpsertClient = {
      async listTenderOptionsByExternalRef(
        _params: { externalRef: string; vendorModel?: string },
      ): Promise<Record<string, unknown>[]> {
        return [];
      },
      async createTenderOption(): Promise<Record<string, unknown>> {
        return { tenderOptionId: 42 };
      },
      async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
        return {};
      },
      async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
        return {};
      },
      async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async uploadTenderOptionFile(request: UploadFileRequest): Promise<Record<string, unknown>> {
        uploadedFiles.push(request);
        return {};
      },
    };

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      uuid: () => "run-files",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    expect(run.totals.created).toBe(1);
    expect(run.totals.filesUploaded).toBe(2);
    expect(run.items[0]?.files.uploaded).toBe(2);
    expect(run.items[0]?.files.wouldUpload).toBe(0);
    expect(uploadedFiles).toHaveLength(2);
    expect(uploadedFiles[0]?.optionId).toBe(42);
    expect(uploadedFiles[0]?.fileName).toBe("spec.pdf");
    expect(uploadedFiles[0]?.path).toBe("https://cdn.example.com/files/spec.pdf");
    expect(uploadedFiles[1]?.fileName).toBe("photo.jpg");
    expect(uploadedFiles[1]?.path).toBe("https://cdn.example.com/files/photo.jpg");
  });

  it("prefers a valid attachment url over an invalid relative path during uploads", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const runStore = new RunStore({ baseDirectory: dir });

    const source = new FakeSource({
      "enriched/product-relative-path.json": {
        externalRef: "SKU-REL",
        optionName: "Relative Path Product",
        categoryId: 10,
        attachments: [
          {
            fileName: "abi-logo.svg",
            path: "abi-logo.svg",
            url: "https://cdn.example.com/files/abi-logo.svg",
            thumbnailUrl: "thumbs/abi-logo.svg",
          },
        ],
      },
    });

    const uploadedFiles: UploadFileRequest[] = [];

    const client: TenderOptionUpsertClient = {
      async listTenderOptionsByExternalRef(): Promise<Record<string, unknown>[]> {
        return [];
      },
      async createTenderOption(): Promise<Record<string, unknown>> {
        return { tenderOptionId: 42 };
      },
      async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
        return {};
      },
      async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
        return {};
      },
      async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async uploadTenderOptionFile(request: UploadFileRequest): Promise<Record<string, unknown>> {
        uploadedFiles.push(request);
        return {};
      },
    };

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      uuid: () => "run-relative-path-files",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    expect(run.totals.filesUploaded).toBe(1);
    expect(uploadedFiles).toHaveLength(1);
    expect(uploadedFiles[0]?.path).toBe("https://cdn.example.com/files/abi-logo.svg");
    expect(uploadedFiles[0]?.thumbnailUrl).toBeUndefined();
  });

  it("falls back to lookup when create response lacks optionId and still uploads files", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const runStore = new RunStore({ baseDirectory: dir });

    const source = new FakeSource({
      "enriched/product-no-id.json": {
        externalRef: "SKU-NOID",
        optionName: "Product No ID Response",
        categoryId: 15,
        attachments: [
          {
            fileName: "drawing.png",
            url: "https://cdn.example.com/files/drawing.png",
          },
        ],
      },
    });

    const uploadedFiles: UploadFileRequest[] = [];
    let createCalled = false;
    let listCallCount = 0;

    const client: TenderOptionUpsertClient = {
      async listTenderOptionsByExternalRef(
        _params: { externalRef: string; vendorModel?: string },
      ): Promise<Record<string, unknown>[]> {
        listCallCount += 1;
        if (!createCalled) {
          return [];
        }
        return [{ tenderOptionId: 77 }];
      },
      async createTenderOption(): Promise<Record<string, unknown>> {
        createCalled = true;
        // Simulate API returning empty/wrapped response with no recognizable ID
        return {};
      },
      async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
        return {};
      },
      async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
        return {};
      },
      async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async uploadTenderOptionFile(request: UploadFileRequest): Promise<Record<string, unknown>> {
        uploadedFiles.push(request);
        return {};
      },
    };

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      uuid: () => "run-fallback-lookup",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    expect(run.totals.created).toBe(1);
    expect(run.totals.filesUploaded).toBe(1);
    expect(run.items[0]?.files.uploaded).toBe(1);
    expect(run.items[0]?.optionId).toBe(77);
    expect(uploadedFiles).toHaveLength(1);
    expect(uploadedFiles[0]?.optionId).toBe(77);
    expect(uploadedFiles[0]?.fileName).toBe("drawing.png");
    expect(uploadedFiles[0]?.path).toBe("https://cdn.example.com/files/drawing.png");
    // First list call returns [] (no existing), second is the fallback lookup
    expect(listCallCount).toBe(2);
  });

  it("persists create-path artifacts and file uploads in SQLite audit storage", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const auditStore = new SqliteAuditStore({
      databasePath: join(dir, "audit.sqlite"),
    });
    const runStore = new RunStore({ baseDirectory: join(dir, "runs"), auditStore });

    const source = new FakeSource({
      "enriched/product-audit.json": {
        externalRef: "SKU-AUDIT",
        optionName: "Audited Product",
        categoryId: 10,
        attachments: [
          {
            fileName: "spec.pdf",
            url: "https://cdn.example.com/files/spec.pdf",
          },
        ],
      },
    });

    const client: TenderOptionUpsertClient = {
      async listTenderOptionsByExternalRef(): Promise<Record<string, unknown>[]> {
        return [];
      },
      async createTenderOption(): Promise<Record<string, unknown>> {
        return { tenderOptionId: 42 };
      },
      async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
        return {};
      },
      async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
        return {};
      },
      async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async uploadTenderOptionFile(): Promise<Record<string, unknown>> {
        return {};
      },
    };

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      auditStore,
      uuid: () => "run-audit-create",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    const detail = auditStore.getRunItemDetail(
      queued.runId,
      "enriched/product-audit.json",
    );
    expect(detail.item?.action).toBe("create");
    expect(detail.artifacts.some((entry) => entry.artifactType === "source-payload")).toBe(
      true,
    );
    expect(
      detail.artifacts.some((entry) => entry.artifactType === "mapped-create-payload"),
    ).toBe(true);
    expect(detail.artifacts.some((entry) => entry.artifactType === "create-response")).toBe(
      true,
    );
    expect(detail.fileSyncAttempts.some((entry) => entry.status === "uploaded")).toBe(
      true,
    );
  });

  it("persists diff artifacts and terminal errors when both patch strategies fail", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const auditStore = new SqliteAuditStore({
      databasePath: join(dir, "audit.sqlite"),
    });
    const runStore = new RunStore({ baseDirectory: join(dir, "runs"), auditStore });

    const source = new FakeSource({
      "enriched/product-patch-fail.json": {
        externalRef: "SKU-PATCH-FAIL",
        optionName: "New Name",
        categoryId: 7,
      },
    });

    const client: TenderOptionUpsertClient = {
      async listTenderOptionsByExternalRef(): Promise<Record<string, unknown>[]> {
        return [
          {
            tenderOptionId: 11,
            optionName: "Old Name",
            visibleBySales: true,
            businessUnit: { businessUnitId: 1 },
            resourceCode: { resourceCodeId: 5 },
            tenderOptionCategory: { tenderOptionCategoryId: 7 },
          },
        ];
      },
      async createTenderOption(): Promise<Record<string, unknown>> {
        return {};
      },
      async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
        throw new HttpError("json patch failed", 500, { message: "json failed" });
      },
      async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
        throw new HttpError("merge patch failed", 500, { message: "merge failed" });
      },
      async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async uploadTenderOptionFile(): Promise<Record<string, unknown>> {
        return {};
      },
    };

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      auditStore,
      uuid: () => "run-audit-patch-fail",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    expect(run.items[0]?.action).toBe("error_runtime");
    const detail = auditStore.getRunItemDetail(
      queued.runId,
      "enriched/product-patch-fail.json",
    );
    expect(detail.artifacts.some((entry) => entry.artifactType === "diff-json-patch")).toBe(
      true,
    );
    expect(
      detail.artifacts.some((entry) => entry.artifactType === "diff-merge-payload"),
    ).toBe(true);
    expect(detail.artifacts.some((entry) => entry.artifactType === "item-error")).toBe(
      true,
    );
    expect(detail.item?.error).toContain("merge patch failed");
    expect(detail.item?.error).toContain("json patch failed");
  });

  it("records deferred file uploads when create leaves optionId unavailable", async () => {
    const dir = await mkdtemp(join(tmpdir(), "upserter-usecase-"));
    const auditStore = new SqliteAuditStore({
      databasePath: join(dir, "audit.sqlite"),
    });
    const runStore = new RunStore({ baseDirectory: join(dir, "runs"), auditStore });

    const source = new FakeSource({
      "enriched/product-deferred.json": {
        externalRef: "SKU-DEFERRED",
        optionName: "Deferred Upload Product",
        categoryId: 10,
        attachments: [
          {
            fileName: "drawing.png",
            url: "https://cdn.example.com/files/drawing.png",
          },
        ],
      },
    });

    const client: TenderOptionUpsertClient = {
      async listTenderOptionsByExternalRef(): Promise<Record<string, unknown>[]> {
        return [];
      },
      async createTenderOption(): Promise<Record<string, unknown>> {
        return {};
      },
      async patchTenderOptionJsonPatch(): Promise<Record<string, unknown>> {
        return {};
      },
      async patchTenderOptionMerge(): Promise<Record<string, unknown>> {
        return {};
      },
      async listTenderOptionFilesPreferred(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async listTenderOptionFilesFallback(): Promise<ExistingRemoteFile[]> {
        return [];
      },
      async uploadTenderOptionFile(): Promise<Record<string, unknown>> {
        return {};
      },
    };

    const service = new TenderOptionUpsertService({
      env,
      source,
      client,
      runStore,
      auditStore,
      uuid: () => "run-audit-deferred",
      now: () => new Date("2026-02-18T12:00:00.000Z"),
    });

    const queued = await service.queueRun({
      dryRun: false,
      prefix: "enriched/**/*.json",
      concurrency: 1,
      fileConcurrency: 1,
    });

    const run = await waitForRun(runStore, queued.runId);

    expect(run.status).toBe("completed");
    const detail = auditStore.getRunItemDetail(
      queued.runId,
      "enriched/product-deferred.json",
    );
    expect(detail.item?.optionId).toBeUndefined();
    expect(
      detail.fileSyncAttempts.some(
        (entry) => entry.status === "deferred_missing_option_id",
      ),
    ).toBe(true);
  });
});
