import { createHash } from "node:crypto";

import { HttpError } from "@/infra/clickhome-client";
import { ObservabilityStore } from "@/infra/observability";
import { RunStore } from "@/infra/run-store";
import { SqliteAuditStore } from "@/infra/sqlite-audit-store";
import { buildTenderOptionDiff } from "@/domain/diff";
import { mapTenderOptionModel } from "@/domain/map-tender-option";
import { normalizeEnrichedProduct } from "@/domain/normalize";
import type { AppEnv } from "@/config/env";
import type {
  AppliedRunOptions,
  AuditContext,
  ExistingRemoteFile,
  FileSyncSummary,
  JsonPatchOperation,
  Logger,
  NormalizedAttachment,
  RunItemOutcome,
  RunOptions,
  RunReport,
  TenderOptionUpsertClient,
  TenderOptionUpsertSource,
  UploadFileRequest,
} from "@/types/upsert";
import { createEmptyTotals } from "@/types/upsert";

interface UpsertServiceDependencies {
  env: AppEnv;
  source: TenderOptionUpsertSource;
  client: TenderOptionUpsertClient;
  runStore: RunStore;
  logger?: Logger;
  observability?: ObservabilityStore;
  auditStore?: SqliteAuditStore;
  now?: () => Date;
  uuid?: () => string;
  externalReferenceKey?: string;
}

interface ProcessItemResult {
  item: RunItemOutcome;
  parsed: boolean;
}

const FAR_FUTURE_ISO = "9999-12-31T23:59:59Z";

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function readPath(record: Record<string, unknown>, path: string): unknown {
  const segments = path.split(".");
  let current: unknown = record;

  for (const segment of segments) {
    if (!isRecord(current)) {
      return undefined;
    }

    current = current[segment];
  }

  return current;
}

function hashJson(value: unknown): string {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

function clampPositiveInteger(value: number | undefined, fallback: number): number {
  if (value === undefined || !Number.isFinite(value) || value <= 0) {
    return fallback;
  }

  return Math.floor(value);
}

function ensurePrefixPattern(prefix: string): string {
  if (/[\*\?]/.test(prefix)) {
    return prefix;
  }

  const normalized = prefix.endsWith("/") ? prefix : `${prefix}/`;
  return `${normalized}**/*.json`;
}

function normalizeFileName(value: string): string {
  return value.trim().toLowerCase();
}

function toAbsoluteHttpUrl(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  try {
    const parsed = new URL(value);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.toString();
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function resolveAttachmentSourceUrl(
  attachment: NormalizedAttachment,
): string | undefined {
  return (
    toAbsoluteHttpUrl(attachment.url) ??
    toAbsoluteHttpUrl(attachment.path) ??
    toAbsoluteHttpUrl(attachment.largeUrl) ??
    toAbsoluteHttpUrl(attachment.mediumUrl) ??
    toAbsoluteHttpUrl(attachment.smallUrl) ??
    toAbsoluteHttpUrl(attachment.thumbnailUrl)
  );
}

function createAttachmentDedupeKey(attachment: {
  fileName: string;
  size?: number;
  hash?: string;
}): string {
  return `${normalizeFileName(attachment.fileName)}|${attachment.size ?? ""}|${
    attachment.hash ?? ""
  }`;
}

function coerceToFiniteNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return undefined;
}

const OPTION_ID_PATHS = [
  "tenderOptionId",
  "optionId",
  "id",
  "result.tenderOptionId",
  "result.optionId",
  "result.id",
  "data.tenderOptionId",
  "data.optionId",
  "data.id",
  "value.tenderOptionId",
  "value.optionId",
  "value.id",
] as const;

function extractOptionId(record: Record<string, unknown>): number | undefined {
  for (const path of OPTION_ID_PATHS) {
    const value = coerceToFiniteNumber(readPath(record, path));
    if (value !== undefined) {
      return value;
    }
  }

  return undefined;
}

function stringifyErrorBody(body: unknown): string | undefined {
  if (body === undefined) {
    return undefined;
  }

  if (typeof body === "string") {
    return body.trim() || undefined;
  }

  try {
    return JSON.stringify(body);
  } catch {
    return String(body);
  }
}

function toErrorMessage(error: unknown): string {
  if (error instanceof HttpError) {
    const details = stringifyErrorBody(error.body);
    if (details) {
      return `${error.message} (status ${error.status}): ${details}`;
    }

    return `${error.message} (status ${error.status})`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}

function canFallbackPatchStrategy(error: unknown): boolean {
  if (!(error instanceof HttpError)) {
    return false;
  }

  return [400, 404, 409, 415, 422, 500].includes(error.status);
}

function createFileSyncSummary(): FileSyncSummary {
  return {
    listedExisting: 0,
    uploaded: 0,
    skippedExisting: 0,
    failed: 0,
    wouldUpload: 0,
  };
}

const defaultLogger: Logger = {
  info(message, meta) {
    if (meta) {
      console.info(message, meta);
      return;
    }

    console.info(message);
  },
  warn(message, meta) {
    if (meta) {
      console.warn(message, meta);
      return;
    }

    console.warn(message);
  },
  error(message, meta) {
    if (meta) {
      console.error(message, meta);
      return;
    }

    console.error(message);
  },
};

export class TenderOptionUpsertService {
  private readonly env: AppEnv;
  private readonly source: TenderOptionUpsertSource;
  private readonly client: TenderOptionUpsertClient;
  private readonly runStore: RunStore;
  private readonly logger: Logger;
  private readonly observability: ObservabilityStore | null;
  private readonly auditStore: SqliteAuditStore | null;
  private readonly now: () => Date;
  private readonly uuid: () => string;
  private readonly externalReferenceKey: string;
  private readonly activeRuns = new Map<string, Promise<void>>();
  private readonly updateChains = new Map<string, Promise<void>>();

  constructor(dependencies: UpsertServiceDependencies) {
    this.env = dependencies.env;
    this.source = dependencies.source;
    this.client = dependencies.client;
    this.runStore = dependencies.runStore;
    this.logger = dependencies.logger ?? defaultLogger;
    this.observability = dependencies.observability ?? null;
    this.auditStore = dependencies.auditStore ?? null;
    this.now = dependencies.now ?? (() => new Date());
    this.uuid = dependencies.uuid ?? (() => crypto.randomUUID());
    this.externalReferenceKey = dependencies.externalReferenceKey ?? "EXTERNALREF";
  }

  async queueRun(options: RunOptions): Promise<{ runId: string; mode: "dry-run" | "apply" }> {
    const applied = await this.applyRunOptions(options);
    const runId = this.uuid();

    const report: RunReport = {
      runId,
      status: "queued",
      mode: applied.dryRun ? "dry-run" : "apply",
      createdAt: this.now().toISOString(),
      options: applied,
      totals: createEmptyTotals(),
      checkpoint: {},
      items: [],
    };

    await this.runStore.createRun(report);
    this.observability?.incrementCounter("upsert.runs.total", 1, {
      phase: "queued",
      mode: report.mode,
    });
    this.recordRunEvent({
      runId,
      level: "info",
      event: "upsert.run.queued",
      message: "Upsert run queued",
      data: {
        mode: report.mode,
        options: applied,
      },
    });

    const task = this.executeRun(runId, applied)
      .catch(async (error: unknown) => {
        const message = toErrorMessage(error);
        this.logger.error("Upsert run failed", { runId, error: message });
        this.observability?.incrementCounter("upsert.runs.total", 1, {
          phase: "failed",
          mode: report.mode,
        });
        this.recordRunEvent({
          runId,
          level: "error",
          event: "upsert.run.failed",
          message: "Upsert run failed",
          data: {
            error: message,
          },
        });
        await this.enqueueUpdate(runId, (current) => ({
          ...current,
          status: "failed",
          finishedAt: this.now().toISOString(),
          error: message,
        }));
      })
      .finally(() => {
        this.activeRuns.delete(runId);
        this.updateRuntimeGauges();
      });

    this.activeRuns.set(runId, task);
    this.updateRuntimeGauges();

    return {
      runId,
      mode: report.mode,
    };
  }

  async getRun(runId: string): Promise<RunReport | undefined> {
    return this.runStore.getRun(runId);
  }

  getRuntimeSnapshot(): {
    activeRunIds: string[];
    activeRunCount: number;
    pendingUpdateChains: number;
  } {
    return {
      activeRunIds: [...this.activeRuns.keys()],
      activeRunCount: this.activeRuns.size,
      pendingUpdateChains: this.updateChains.size,
    };
  }

  private updateRuntimeGauges(): void {
    this.observability?.setGauge("upsert.active_runs", this.activeRuns.size);
    this.observability?.setGauge(
      "upsert.pending_update_chains",
      this.updateChains.size,
    );
  }

  private buildAuditContext(
    runId: string,
    input: {
      itemKey?: string;
      externalRef?: string;
      optionId?: number;
      step?: string;
      requestId?: string;
    } = {},
  ): AuditContext {
    return {
      runId,
      itemKey: input.itemKey,
      externalRef: input.externalRef,
      optionId: input.optionId,
      step: input.step,
      requestId: input.requestId,
    };
  }

  private recordArtifact(input: {
    runId: string;
    itemKey?: string;
    externalRef?: string;
    optionId?: number;
    step: string;
    artifactType: string;
    payload: unknown;
    contentType?: string;
  }): void {
    this.auditStore?.recordArtifact({
      context: this.buildAuditContext(input.runId, {
        itemKey: input.itemKey,
        externalRef: input.externalRef,
        optionId: input.optionId,
        step: input.step,
      }),
      step: input.step,
      artifactType: input.artifactType,
      payload: input.payload,
      contentType: input.contentType,
    });
  }

  private recordFileSyncAttempt(input: {
    runId: string;
    itemKey: string;
    externalRef?: string;
    optionId?: number;
    stage: string;
    status: string;
    fileName: string;
    sourceUrl?: string;
    request?: unknown;
    response?: unknown;
    error?: string;
  }): void {
    this.auditStore?.recordFileSyncAttempt({
      context: this.buildAuditContext(input.runId, {
        itemKey: input.itemKey,
        externalRef: input.externalRef,
        optionId: input.optionId,
        step: input.stage,
      }),
      stage: input.stage,
      status: input.status,
      fileName: input.fileName,
      sourceUrl: input.sourceUrl,
      request: input.request,
      response: input.response,
      error: input.error,
    });
  }

  private recordRunEvent(input: {
    runId: string;
    level: "info" | "warn" | "error";
    event: string;
    message: string;
    data?: Record<string, unknown>;
    durationMs?: number;
  }): void {
    this.observability?.recordEvent({
      level: input.level,
      component: "upsert-service",
      event: input.event,
      traceId: input.runId,
      runId: input.runId,
      message: input.message,
      durationMs: input.durationMs,
      data: input.data,
    });
    this.auditStore?.recordStepEvent({
      context: this.buildAuditContext(input.runId, {
        step: input.event,
      }),
      component: "upsert-service",
      event: input.event,
      level: input.level,
      message: input.message,
      durationMs: input.durationMs,
      data: input.data,
    });
  }

  private recordItemEvent(input: {
    runId: string;
    itemKey: string;
    externalRef?: string;
    optionId?: number;
    level: "info" | "warn" | "error";
    event: string;
    message: string;
    data?: Record<string, unknown>;
    durationMs?: number;
  }): void {
    this.observability?.recordEvent({
      level: input.level,
      component: "upsert-service",
      event: input.event,
      traceId: input.runId,
      runId: input.runId,
      itemKey: input.itemKey,
      externalRef: input.externalRef,
      optionId: input.optionId,
      message: input.message,
      durationMs: input.durationMs,
      data: input.data,
    });
    this.auditStore?.recordStepEvent({
      context: this.buildAuditContext(input.runId, {
        itemKey: input.itemKey,
        externalRef: input.externalRef,
        optionId: input.optionId,
        step: input.event,
      }),
      component: "upsert-service",
      event: input.event,
      level: input.level,
      message: input.message,
      durationMs: input.durationMs,
      data: input.data,
    });
  }

  private async executeRun(runId: string, options: AppliedRunOptions): Promise<void> {
    const startedAt = Date.now();
    await this.enqueueUpdate(runId, (current) => ({
      ...current,
      status: "running",
      startedAt: this.now().toISOString(),
      checkpoint: {
        ...current.checkpoint,
        updatedAt: this.now().toISOString(),
      },
    }));
    this.observability?.incrementCounter("upsert.runs.total", 1, {
      phase: "started",
      mode: options.dryRun ? "dry-run" : "apply",
    });
    this.recordRunEvent({
      runId,
      level: "info",
      event: "upsert.run.started",
      message: "Upsert run started",
      data: {
        options,
      },
    });

    const running = new Set<Promise<void>>();

    const iterator = this.source.listJsonObjects({
      prefixPattern: options.prefix,
      startAfter: options.startAfter,
      limit: options.limit,
    });

    for await (const objectSummary of iterator) {
      const task = this.processSingleObject(runId, objectSummary.key, objectSummary, options)
        .then(async (result) => {
          await this.recordItem(runId, result.item, result.parsed, objectSummary.key);
        })
        .catch(async (error: unknown) => {
          const nowIso = this.now().toISOString();
          const fallbackItem: RunItemOutcome = {
            key: objectSummary.key,
            action: "error_runtime",
            files: createFileSyncSummary(),
            error: toErrorMessage(error),
            startedAt: nowIso,
            finishedAt: nowIso,
            latencyMs: 0,
          };
          this.recordItemEvent({
            runId,
            itemKey: objectSummary.key,
            level: "error",
            event: "upsert.item.crashed",
            message: "Unhandled exception while processing object",
            data: {
              error: toErrorMessage(error),
            },
          });
          await this.recordItem(runId, fallbackItem, false, objectSummary.key);
        })
        .finally(() => {
          running.delete(task);
        });

      running.add(task);
      if (running.size >= options.concurrency) {
        await Promise.race(running);
      }
    }

    await Promise.all(running);
    await this.awaitPendingUpdates(runId);

    await this.enqueueUpdate(runId, (current) => ({
      ...current,
      status: "completed",
      finishedAt: this.now().toISOString(),
      checkpoint: {
        ...current.checkpoint,
        updatedAt: this.now().toISOString(),
      },
    }));
    this.observability?.incrementCounter("upsert.runs.total", 1, {
      phase: "completed",
      mode: options.dryRun ? "dry-run" : "apply",
    });
    this.observability?.observeDuration(
      "upsert.run.duration_ms",
      Date.now() - startedAt,
      {
        mode: options.dryRun ? "dry-run" : "apply",
      },
    );
    this.recordRunEvent({
      runId,
      level: "info",
      event: "upsert.run.completed",
      message: "Upsert run completed",
      durationMs: Date.now() - startedAt,
      data: {
        runtime: this.getRuntimeSnapshot(),
      },
    });
  }

  private async processSingleObject(
    runId: string,
    key: string,
    objectSummary: { eTag?: string; lastModified?: string; size?: number },
    options: AppliedRunOptions
  ): Promise<ProcessItemResult> {
    const startedAt = this.now();
    const sourceMetadata = {
      s3Key: key,
      eTag: objectSummary.eTag,
      lastModified: objectSummary.lastModified,
      size: objectSummary.size,
    };
    this.observability?.incrementCounter("upsert.items.total", 1, {
      phase: "started",
    });
    this.recordItemEvent({
      runId,
      itemKey: key,
      level: "info",
      event: "upsert.item.started",
      message: "Started processing source object",
      data: {
        source: sourceMetadata,
        mode: options.dryRun ? "dry-run" : "apply",
      },
    });

    let payload: unknown;
    try {
      payload = await this.source.readJsonObject(key);
    } catch (error) {
      const finishedAt = this.now();
      this.recordItemEvent({
        runId,
        itemKey: key,
        level: "error",
        event: "upsert.item.read_failed",
        message: "Failed to read source JSON",
        durationMs: finishedAt.getTime() - startedAt.getTime(),
        data: {
          error: toErrorMessage(error),
        },
      });
      return {
        parsed: false,
        item: {
          key,
          action: "error_runtime",
          files: createFileSyncSummary(),
          error: `Failed to read JSON from S3: ${toErrorMessage(error)}`,
          startedAt: startedAt.toISOString(),
          finishedAt: finishedAt.toISOString(),
          latencyMs: finishedAt.getTime() - startedAt.getTime(),
        },
      };
    }

    this.recordArtifact({
      runId,
      itemKey: key,
      step: "source.read",
      artifactType: "source-payload",
      payload: {
        source: sourceMetadata,
        payload,
      },
    });

    const normalized = normalizeEnrichedProduct(payload, sourceMetadata);
    if (!normalized.ok) {
      const finishedAt = this.now();
      this.recordArtifact({
        runId,
        itemKey: key,
        step: "normalize.failed",
        artifactType: "normalization-error",
        payload: normalized.error,
      });
      const action =
        normalized.error.code === "missing_identity"
          ? "error_missing_identity"
          : "error_validation";
      this.recordItemEvent({
        runId,
        itemKey: key,
        level: "warn",
        event: "upsert.item.normalization_failed",
        message: "Normalized payload failed validation",
        durationMs: finishedAt.getTime() - startedAt.getTime(),
        data: {
          errorCode: normalized.error.code,
          error: normalized.error.message,
        },
      });

      return {
        parsed: true,
        item: {
          key,
          action,
          files: createFileSyncSummary(),
          error: normalized.error.message,
          startedAt: startedAt.toISOString(),
          finishedAt: finishedAt.toISOString(),
          latencyMs: finishedAt.getTime() - startedAt.getTime(),
        },
      };
    }

    const product = normalized.value;
    const fileSummary = createFileSyncSummary();
    this.recordArtifact({
      runId,
      itemKey: key,
      externalRef: product.externalRef,
      step: "normalize.completed",
      artifactType: "normalized-product",
      payload: product,
    });
    const mapping = mapTenderOptionModel(product, {
      businessUnitId: this.env.CLICKHOME_BUSINESS_UNIT_ID,
      resourceCodeId: this.env.CLICKHOME_RESOURCE_CODE,
      nowIso: this.now().toISOString(),
      farFutureIso: FAR_FUTURE_ISO,
      externalReferenceKey: this.externalReferenceKey,
    });
    this.recordArtifact({
      runId,
      itemKey: key,
      externalRef: product.externalRef,
      step: "map.completed",
      artifactType: "mapped-create-payload",
      payload: mapping.createPayload,
    });
    this.recordItemEvent({
      runId,
      itemKey: key,
      externalRef: product.externalRef,
      level: "info",
      event: "upsert.item.mapped",
      message: "Mapped normalized product to TenderOption payload",
      data: {
        mappedPayloadHash: hashJson(mapping.createPayload),
        attachmentCount: product.attachments.length,
      },
    });

    try {
      const existing = await this.client.listTenderOptionsByExternalRef({
        externalRef: product.externalRef,
        vendorModel: product.vendorModel ?? product.sku,
      }, this.buildAuditContext(runId, {
        itemKey: key,
        externalRef: product.externalRef,
        step: "lookup.existing",
      }));
      this.recordArtifact({
        runId,
        itemKey: key,
        externalRef: product.externalRef,
        step: "lookup.existing",
        artifactType: "lookup-results",
        payload: existing,
      });
      this.recordItemEvent({
        runId,
        itemKey: key,
        externalRef: product.externalRef,
        level: "info",
        event: "upsert.lookup.completed",
        message: "Completed existing TenderOption lookup",
        data: {
          matchCount: existing.length,
          vendorModel: product.vendorModel ?? product.sku,
        },
      });

      if (existing.length > 1) {
        const finishedAt = this.now();
        this.recordItemEvent({
          runId,
          itemKey: key,
          externalRef: product.externalRef,
          level: "error",
          event: "upsert.lookup.duplicate_match",
          message: "Multiple existing TenderOptions matched",
          durationMs: finishedAt.getTime() - startedAt.getTime(),
          data: {
            matchCount: existing.length,
          },
        });
        return {
          parsed: true,
          item: {
            key,
            externalRef: product.externalRef,
            action: "error_duplicate_identity",
            files: fileSummary,
            error: "Multiple tender options matched this external reference",
            startedAt: startedAt.toISOString(),
            finishedAt: finishedAt.toISOString(),
            latencyMs: finishedAt.getTime() - startedAt.getTime(),
            audit: {
              mappedPayloadHash: hashJson(mapping.createPayload),
            },
          },
        };
      }

      let optionId: number | undefined;
      let action: RunItemOutcome["action"];
      let decision: RunItemOutcome["decision"];
      let audit: RunItemOutcome["audit"] = {
        mappedPayloadHash: hashJson(mapping.createPayload),
      };

      if (existing.length === 0) {
        if (options.dryRun) {
          action = "create_dry_run";
          decision = {
            action: "create",
            reason: "No existing option found by external reference",
          };
          this.recordItemEvent({
            runId,
            itemKey: key,
            externalRef: product.externalRef,
            level: "info",
            event: "upsert.create.dry_run",
            message: "Would create TenderOption",
          });
        } else {
          const created = await this.client.createTenderOption(
            mapping.createPayload,
            this.buildAuditContext(runId, {
              itemKey: key,
              externalRef: product.externalRef,
              step: "create.request",
            }),
          );
          this.recordArtifact({
            runId,
            itemKey: key,
            externalRef: product.externalRef,
            step: "create.response",
            artifactType: "create-response",
            payload: created,
          });
          optionId = extractOptionId(created);

          if (optionId === undefined) {
            this.logger.warn("Could not extract optionId from create response, falling back to lookup", {
              key,
              externalRef: product.externalRef,
              responseKeys: Object.keys(created),
            });
            const lookupResults = await this.client.listTenderOptionsByExternalRef({
              externalRef: product.externalRef,
              vendorModel: product.vendorModel ?? product.sku,
            }, this.buildAuditContext(runId, {
              itemKey: key,
              externalRef: product.externalRef,
              step: "create.lookup_fallback",
            }));
            this.recordArtifact({
              runId,
              itemKey: key,
              externalRef: product.externalRef,
              step: "create.lookup_fallback",
              artifactType: "fallback-lookup-results",
              payload: lookupResults,
            });
            if (lookupResults.length === 1 && lookupResults[0]) {
              optionId = extractOptionId(lookupResults[0]);
            }
          }

          action = "create";
          decision = {
            action: "create",
            reason: "No existing option found by external reference",
            optionId,
          };
          audit = {
            ...audit,
            responseId: optionId,
          };
          this.recordItemEvent({
            runId,
            itemKey: key,
            externalRef: product.externalRef,
            optionId,
            level: "info",
            event: "upsert.create.completed",
            message: "Created TenderOption",
            data: {
              optionId,
            },
          });
        }
      } else {
        const existingOption = existing[0];
        if (!existingOption) {
          throw new Error("Existing tender option list unexpectedly empty");
        }

        optionId = extractOptionId(existingOption);

        const diff = buildTenderOptionDiff(existingOption, mapping.createPayload);
        this.recordArtifact({
          runId,
          itemKey: key,
          externalRef: product.externalRef,
          optionId,
          step: "update.diff",
          artifactType: "diff-summary",
          payload: {
            changedPaths: diff.changedPaths,
            operationCount: diff.operations.length,
          },
        });
        this.recordArtifact({
          runId,
          itemKey: key,
          externalRef: product.externalRef,
          optionId,
          step: "update.diff",
          artifactType: "diff-json-patch",
          payload: diff.operations,
        });
        this.recordArtifact({
          runId,
          itemKey: key,
          externalRef: product.externalRef,
          optionId,
          step: "update.diff",
          artifactType: "diff-merge-payload",
          payload: diff.mergePayload,
        });
        this.recordItemEvent({
          runId,
          itemKey: key,
          externalRef: product.externalRef,
          optionId,
          level: "info",
          event: "upsert.update.diff_built",
          message: "Built tracked field diff",
          data: {
            changedPaths: diff.changedPaths,
            operationCount: diff.operations.length,
          },
        });
        if (diff.operations.length === 0) {
          action = "skip_unchanged";
          decision = {
            action: "skip_unchanged",
            reason: "No tracked fields changed",
            optionId,
          };
          this.recordItemEvent({
            runId,
            itemKey: key,
            externalRef: product.externalRef,
            optionId,
            level: "info",
            event: "upsert.update.skipped",
            message: "Skipped update because no tracked fields changed",
          });
        } else if (options.dryRun) {
          action = "update_dry_run";
          decision = {
            action: "update",
            reason: "Tracked fields changed",
            optionId,
            jsonPatchOperations: diff.operations,
            mergePatchObject: diff.mergePayload,
          };
          audit = {
            ...audit,
            jsonPatchHash: hashJson(diff.operations),
            mergePayloadHash: hashJson(diff.mergePayload),
          };
          this.recordItemEvent({
            runId,
            itemKey: key,
            externalRef: product.externalRef,
            optionId,
            level: "info",
            event: "upsert.update.dry_run",
            message: "Would update TenderOption",
            data: {
              changedPaths: diff.changedPaths,
              operationCount: diff.operations.length,
            },
          });
        } else {
          let patchStrategy: "json-patch" | "merge-object" = "merge-object";
          this.recordItemEvent({
            runId,
            itemKey: key,
            externalRef: product.externalRef,
            optionId,
            level: "info",
            event: "upsert.update.patch_attempt",
            message: "Attempting TenderOption patch",
            data: {
              primaryStrategy: patchStrategy,
              operationCount: diff.operations.length,
            },
          });

          try {
            await this.client.patchTenderOptionMerge(
              optionId ?? 0,
              diff.mergePayload,
              this.buildAuditContext(runId, {
                itemKey: key,
                externalRef: product.externalRef,
                optionId,
                step: "update.patch.merge",
              }),
            );
          } catch (primaryError) {
            if (!canFallbackPatchStrategy(primaryError)) {
              throw primaryError;
            }

            patchStrategy = "json-patch";
            this.recordItemEvent({
              runId,
              itemKey: key,
              externalRef: product.externalRef,
              optionId,
              level: "warn",
              event: "upsert.update.patch_fallback",
              message: "Primary patch strategy failed; attempting fallback",
              data: {
                primaryError: toErrorMessage(primaryError),
                fallbackStrategy: patchStrategy,
              },
            });
            try {
              await this.client.patchTenderOptionJsonPatch(
                optionId ?? 0,
                diff.operations,
                this.buildAuditContext(runId, {
                  itemKey: key,
                  externalRef: product.externalRef,
                  optionId,
                  step: "update.patch.json-patch",
                }),
              );
            } catch (fallbackError) {
              throw new Error(
                `Primary patch strategy failed: ${toErrorMessage(primaryError)}; fallback patch strategy failed: ${toErrorMessage(fallbackError)}`,
              );
            }
          }

          action = "update";
          decision = {
            action: "update",
            reason: "Tracked fields changed",
            optionId,
            jsonPatchOperations: diff.operations,
            mergePatchObject: diff.mergePayload,
          };
          audit = {
            ...audit,
            jsonPatchHash: hashJson(diff.operations),
            mergePayloadHash: hashJson(diff.mergePayload),
            patchStrategy,
            responseId: optionId,
          };
          this.recordItemEvent({
            runId,
            itemKey: key,
            externalRef: product.externalRef,
            optionId,
            level: "info",
            event: "upsert.update.completed",
            message: "Updated TenderOption",
            data: {
              patchStrategy,
              changedPaths: diff.changedPaths,
            },
          });
        }
      }

      const syncSummary = await this.syncFiles({
        runId,
        optionId,
        itemKey: key,
        externalRef: product.externalRef,
        attachments: product.attachments,
        dryRun: options.dryRun,
        fileConcurrency: options.fileConcurrency,
      });

      fileSummary.listedExisting = syncSummary.listedExisting;
      fileSummary.uploaded = syncSummary.uploaded;
      fileSummary.skippedExisting = syncSummary.skippedExisting;
      fileSummary.failed = syncSummary.failed;
      fileSummary.wouldUpload = syncSummary.wouldUpload;

      const finishedAt = this.now();
      this.recordItemEvent({
        runId,
        itemKey: key,
        externalRef: product.externalRef,
        optionId,
        level: fileSummary.failed > 0 ? "warn" : "info",
        event: "upsert.item.completed",
        message: "Finished processing source object",
        durationMs: finishedAt.getTime() - startedAt.getTime(),
        data: {
          action,
          fileSummary,
        },
      });
      this.recordArtifact({
        runId,
        itemKey: key,
        externalRef: product.externalRef,
        optionId,
        step: "item.completed",
        artifactType: "item-outcome",
        payload: {
          action,
          decision,
          files: fileSummary,
          audit,
        },
      });

      return {
        parsed: true,
        item: {
          key,
          externalRef: product.externalRef,
          action,
          decision,
          optionId,
          files: fileSummary,
          error:
            fileSummary.failed > 0
              ? `${fileSummary.failed} file upload(s) failed`
              : undefined,
          startedAt: startedAt.toISOString(),
          finishedAt: finishedAt.toISOString(),
          latencyMs: finishedAt.getTime() - startedAt.getTime(),
          audit,
        },
      };
    } catch (error) {
      const finishedAt = this.now();
      this.recordItemEvent({
        runId,
        itemKey: key,
        externalRef: normalized.value.externalRef,
        level: "error",
        event: "upsert.item.failed",
        message: "Processing source object failed",
        durationMs: finishedAt.getTime() - startedAt.getTime(),
        data: {
          error: toErrorMessage(error),
        },
      });
      this.recordArtifact({
        runId,
        itemKey: key,
        externalRef: normalized.value.externalRef,
        step: "item.failed",
        artifactType: "item-error",
        payload: {
          error: toErrorMessage(error),
        },
      });
      return {
        parsed: true,
        item: {
          key,
          externalRef: normalized.value.externalRef,
          action: "error_runtime",
          files: fileSummary,
          error: toErrorMessage(error),
          startedAt: startedAt.toISOString(),
          finishedAt: finishedAt.toISOString(),
          latencyMs: finishedAt.getTime() - startedAt.getTime(),
          audit: {
            mappedPayloadHash: hashJson(mapping.createPayload),
          },
        },
      };
    }
  }

  private async syncFiles(input: {
    runId: string;
    optionId?: number;
    itemKey: string;
    externalRef?: string;
    attachments: NormalizedAttachment[];
    dryRun: boolean;
    fileConcurrency: number;
  }): Promise<FileSyncSummary> {
    const summary = createFileSyncSummary();

    if (input.attachments.length === 0) {
      return summary;
    }

    this.recordItemEvent({
      runId: input.runId,
      itemKey: input.itemKey,
      externalRef: input.externalRef,
      optionId: input.optionId,
      level: "info",
      event: "upsert.files.sync_started",
      message: "Started attachment synchronization",
      data: {
        attachmentCount: input.attachments.length,
        dryRun: input.dryRun,
      },
    });

    const attachmentsWithPath = input.attachments.filter((attachment) => {
      return Boolean(resolveAttachmentSourceUrl(attachment));
    });
    const invalidPathCount = input.attachments.length - attachmentsWithPath.length;
    this.recordArtifact({
      runId: input.runId,
      itemKey: input.itemKey,
      externalRef: input.externalRef,
      optionId: input.optionId,
      step: "files.attachments",
      artifactType: "attachments-with-path",
      payload: {
        attachments: attachmentsWithPath,
        invalidPathCount,
      },
    });
    if (invalidPathCount > 0) {
      this.logger.warn("Skipping attachments without absolute HTTP(S) source URL", {
        invalidPathCount,
      });
    }

    if (input.optionId === undefined) {
      summary.wouldUpload = attachmentsWithPath.length;
      for (const attachment of attachmentsWithPath) {
        this.recordFileSyncAttempt({
          runId: input.runId,
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          stage: "files.deferred",
          status: "deferred_missing_option_id",
          fileName: attachment.fileName,
          sourceUrl: resolveAttachmentSourceUrl(attachment),
        });
      }
      this.recordItemEvent({
        runId: input.runId,
        itemKey: input.itemKey,
        externalRef: input.externalRef,
        level: "warn",
        event: "upsert.files.deferred",
        message: "Cannot upload attachments because optionId is unavailable",
        data: {
          wouldUpload: summary.wouldUpload,
        },
      });
      return summary;
    }

    let existingFiles: ExistingRemoteFile[] = [];

    try {
      existingFiles = await this.client.listTenderOptionFilesPreferred(
        input.optionId,
        this.buildAuditContext(input.runId, {
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          optionId: input.optionId,
          step: "files.list.preferred",
        }),
      );
    } catch {
      existingFiles = await this.client.listTenderOptionFilesFallback(
        input.optionId,
        this.buildAuditContext(input.runId, {
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          optionId: input.optionId,
          step: "files.list.fallback",
        }),
      );
    }

    summary.listedExisting = existingFiles.length;
    this.recordArtifact({
      runId: input.runId,
      itemKey: input.itemKey,
      externalRef: input.externalRef,
      optionId: input.optionId,
      step: "files.list",
      artifactType: "existing-files",
      payload: existingFiles,
    });

    const existingKeys = new Set(existingFiles.map((file) => createAttachmentDedupeKey(file)));

    const pendingAttachments: NormalizedAttachment[] = [];
    for (const attachment of attachmentsWithPath) {
      const key = createAttachmentDedupeKey(attachment);
      if (existingKeys.has(key) || existingKeys.has(`${normalizeFileName(attachment.fileName)}||`)) {
        summary.skippedExisting += 1;
        this.recordFileSyncAttempt({
          runId: input.runId,
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          optionId: input.optionId,
          stage: "files.dedupe",
          status: "skipped_existing",
          fileName: attachment.fileName,
          sourceUrl: resolveAttachmentSourceUrl(attachment),
          request: attachment,
        });
        continue;
      }

      pendingAttachments.push(attachment);
    }
    this.recordArtifact({
      runId: input.runId,
      itemKey: input.itemKey,
      externalRef: input.externalRef,
      optionId: input.optionId,
      step: "files.pending",
      artifactType: "pending-attachments",
      payload: pendingAttachments,
    });

    if (input.dryRun) {
      summary.wouldUpload += pendingAttachments.length;
      for (const attachment of pendingAttachments) {
        this.recordFileSyncAttempt({
          runId: input.runId,
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          optionId: input.optionId,
          stage: "files.dry_run",
          status: "would_upload",
          fileName: attachment.fileName,
          sourceUrl: resolveAttachmentSourceUrl(attachment),
          request: attachment,
        });
      }
      this.recordItemEvent({
        runId: input.runId,
        itemKey: input.itemKey,
        externalRef: input.externalRef,
        optionId: input.optionId,
        level: "info",
        event: "upsert.files.dry_run",
        message: "Calculated pending attachment uploads",
        data: {
          listedExisting: summary.listedExisting,
          skippedExisting: summary.skippedExisting,
          wouldUpload: summary.wouldUpload,
        },
      });
      return summary;
    }

    await this.runWithConcurrency(pendingAttachments, input.fileConcurrency, async (attachment) => {
      try {
        const uploadRequest = await this.resolveUploadRequest(input.optionId!, attachment);
        this.recordFileSyncAttempt({
          runId: input.runId,
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          optionId: input.optionId,
          stage: "files.upload",
          status: "requesting",
          fileName: attachment.fileName,
          sourceUrl: uploadRequest.path,
          request: uploadRequest,
        });
        const uploadResponse = await this.client.uploadTenderOptionFile(
          uploadRequest,
          this.buildAuditContext(input.runId, {
            itemKey: input.itemKey,
            externalRef: input.externalRef,
            optionId: input.optionId,
            step: "files.upload",
          }),
        );
        summary.uploaded += 1;
        this.recordFileSyncAttempt({
          runId: input.runId,
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          optionId: input.optionId,
          stage: "files.upload",
          status: "uploaded",
          fileName: attachment.fileName,
          sourceUrl: uploadRequest.path,
          request: uploadRequest,
          response: uploadResponse,
        });
      } catch (error) {
        summary.failed += 1;
        this.logger.warn("File upload failed", {
          optionId: input.optionId,
          fileName: attachment.fileName,
          error: toErrorMessage(error),
        });
        this.recordFileSyncAttempt({
          runId: input.runId,
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          optionId: input.optionId,
          stage: "files.upload",
          status: "failed",
          fileName: attachment.fileName,
          sourceUrl: resolveAttachmentSourceUrl(attachment),
          request: attachment,
          error: toErrorMessage(error),
        });
        this.recordItemEvent({
          runId: input.runId,
          itemKey: input.itemKey,
          externalRef: input.externalRef,
          optionId: input.optionId,
          level: "warn",
          event: "upsert.files.upload_failed",
          message: "Attachment upload failed",
          data: {
            fileName: attachment.fileName,
            error: toErrorMessage(error),
          },
        });
      }
    });

    this.recordItemEvent({
      runId: input.runId,
      itemKey: input.itemKey,
      externalRef: input.externalRef,
      optionId: input.optionId,
      level: summary.failed > 0 ? "warn" : "info",
      event: "upsert.files.sync_completed",
      message: "Completed attachment synchronization",
      data: {
        ...summary,
      },
    });

    return summary;
  }

  private async resolveUploadRequest(
    optionId: number,
    attachment: NormalizedAttachment
  ): Promise<UploadFileRequest> {
    const path = resolveAttachmentSourceUrl(attachment);
    if (!path) {
      throw new Error("Attachment has no absolute HTTP(S) source URL for AddFile request");
    }

    return {
      optionId,
      fileName: attachment.fileName,
      title: attachment.title ?? attachment.fileName,
      keyWords: attachment.keyWords,
      path,
      thumbnailUrl: toAbsoluteHttpUrl(attachment.thumbnailUrl),
      smallUrl: toAbsoluteHttpUrl(attachment.smallUrl),
      mediumUrl: toAbsoluteHttpUrl(attachment.mediumUrl),
      largeUrl: toAbsoluteHttpUrl(attachment.largeUrl),
    };
  }

  private async runWithConcurrency<T>(
    values: T[],
    concurrency: number,
    worker: (value: T) => Promise<void>
  ): Promise<void> {
    const max = clampPositiveInteger(concurrency, 2);
    const running = new Set<Promise<void>>();

    for (const value of values) {
      const task = worker(value).finally(() => {
        running.delete(task);
      });
      running.add(task);

      if (running.size >= max) {
        await Promise.race(running);
      }
    }

    await Promise.all(running);
  }

  private async recordItem(
    runId: string,
    item: RunItemOutcome,
    parsed: boolean,
    lastProcessedKey: string
  ): Promise<void> {
    await this.enqueueUpdate(runId, (current) => {
      const totals = {
        ...current.totals,
      };

      totals.scanned += 1;
      if (parsed) {
        totals.parsed += 1;
      }

      if (item.action === "create" || item.action === "create_dry_run") {
        totals.created += 1;
      }

      if (item.action === "update" || item.action === "update_dry_run") {
        totals.updated += 1;
      }

      if (item.action === "skip_unchanged") {
        totals.skipped += 1;
      }

      if (item.action.startsWith("error") || item.error) {
        totals.errored += 1;
      }

      totals.filesUploaded += item.files.uploaded;
      totals.filesSkipped += item.files.skippedExisting;

      return {
        ...current,
        totals,
        checkpoint: {
          lastProcessedKey,
          updatedAt: this.now().toISOString(),
        },
        items: [...current.items, item],
      };
    });
    this.auditStore?.recordRunItem(runId, item);
    this.observability?.incrementCounter("upsert.items.total", 1, {
      action: item.action,
      parsed,
    });
    if (item.files.uploaded > 0) {
      this.observability?.incrementCounter(
        "upsert.files.uploaded.total",
        item.files.uploaded,
      );
    }
    if (item.files.skippedExisting > 0) {
      this.observability?.incrementCounter(
        "upsert.files.skipped.total",
        item.files.skippedExisting,
      );
    }
  }

  private async enqueueUpdate(
    runId: string,
    updater: (report: RunReport) => RunReport
  ): Promise<void> {
    const current = this.updateChains.get(runId) ?? Promise.resolve();

    const next = current.then(async () => {
      await this.runStore.updateRun(runId, updater);
    });

    this.updateChains.set(
      runId,
      next.catch(() => {
        // chain state handled by caller
      })
    );
    this.updateRuntimeGauges();

    await next;
  }

  private async awaitPendingUpdates(runId: string): Promise<void> {
    const pending = this.updateChains.get(runId);
    if (!pending) {
      return;
    }

    await pending;
  }

  private async applyRunOptions(input: RunOptions): Promise<AppliedRunOptions> {
    const dryRun = input.dryRun !== false;
    const prefix = ensurePrefixPattern(input.prefix ?? this.env.ENRICHED_DATA_PATH);
    const normalizedLimit =
      input.limit !== undefined ? clampPositiveInteger(input.limit, 1) : undefined;

    let startAfter = input.startAfter;
    const resumeFromCheckpoint = input.resumeFromCheckpoint === true;

    if (resumeFromCheckpoint && !startAfter) {
      const checkpoint = await this.runStore.getLatestCheckpoint();
      if (checkpoint?.lastProcessedKey) {
        startAfter = checkpoint.lastProcessedKey;
      }
    }

    return {
      dryRun,
      prefix,
      limit: normalizedLimit,
      startAfter,
      concurrency: clampPositiveInteger(input.concurrency, 5),
      fileConcurrency: clampPositiveInteger(input.fileConcurrency, 2),
      resumeFromCheckpoint,
    };
  }
}
