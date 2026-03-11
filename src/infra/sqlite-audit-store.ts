import { mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";

import { Database } from "bun:sqlite";

import type { AuditContext, RunItemOutcome, RunReport } from "@/types/upsert";

type NullableJsonValue = string | number | boolean | null | JsonValue[] | {
  [key: string]: JsonValue;
};
type JsonValue = NullableJsonValue | undefined;

type AuditLevel = "debug" | "info" | "warn" | "error";

export interface SqliteAuditStoreOptions {
  databasePath?: string;
  now?: () => Date;
  uuid?: () => string;
}

export interface AuditStepEventInput {
  context?: AuditContext;
  component: string;
  event: string;
  level: AuditLevel;
  message?: string;
  durationMs?: number;
  data?: Record<string, unknown>;
}

export interface AuditArtifactInput {
  context?: AuditContext;
  artifactType: string;
  step: string;
  payload: unknown;
  contentType?: string;
}

export interface AuditHttpExchangeInput {
  context?: AuditContext;
  requestId?: string;
  method: string;
  path: string;
  url: string;
  attempt: number;
  status?: number;
  requestHeaders?: Record<string, string>;
  requestBody?: unknown;
  responseHeaders?: Record<string, string>;
  responseBody?: unknown;
  durationMs?: number;
  error?: string;
}

export interface AuditFileSyncAttemptInput {
  context?: AuditContext;
  stage: string;
  status: string;
  fileName: string;
  sourceUrl?: string;
  request?: unknown;
  response?: unknown;
  error?: string;
}

export interface AuditRunSummary {
  run: RunReport | null;
  itemCount: number;
  stepEventCount: number;
  artifactCount: number;
  httpExchangeCount: number;
  fileSyncAttemptCount: number;
}

export interface AuditRunItemDetail {
  item: RunItemOutcome | null;
  stepEvents: AuditStepEventRow[];
  artifacts: AuditArtifactRow[];
  httpExchanges: AuditHttpExchangeRow[];
  fileSyncAttempts: AuditFileSyncAttemptRow[];
}

export interface AuditStepEventRow {
  id: string;
  runId: string;
  itemKey?: string;
  externalRef?: string;
  optionId?: number;
  step?: string;
  component: string;
  event: string;
  level: AuditLevel;
  message?: string;
  durationMs?: number;
  data?: Record<string, unknown>;
  createdAt: string;
}

export interface AuditArtifactRow {
  id: string;
  runId: string;
  itemKey?: string;
  externalRef?: string;
  optionId?: number;
  step: string;
  artifactType: string;
  contentType: string;
  sha256: string;
  payload: unknown;
  createdAt: string;
}

export interface AuditHttpExchangeRow {
  requestId: string;
  runId?: string;
  itemKey?: string;
  externalRef?: string;
  optionId?: number;
  step?: string;
  method: string;
  path: string;
  url: string;
  attempt: number;
  status?: number;
  requestHeaders?: Record<string, unknown>;
  requestBody?: unknown;
  responseHeaders?: Record<string, unknown>;
  responseBody?: unknown;
  durationMs?: number;
  error?: string;
  createdAt: string;
}

export interface AuditFileSyncAttemptRow {
  id: string;
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
  createdAt: string;
}

const REDACTED_VALUE = "[REDACTED]";
const SECRET_KEY_PATTERN = /(token|api[_-]?key|secret|password|authorization)/i;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function toOptionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function parseOptionalJson<T>(value: unknown): T | undefined {
  if (typeof value !== "string" || value.length === 0) {
    return undefined;
  }

  return JSON.parse(value) as T;
}

function normalizeBody(body: unknown): unknown {
  if (body instanceof FormData) {
    const record: Record<string, unknown> = {};

    for (const [key, value] of body.entries()) {
      const binaryValue = value as unknown as Blob & { name?: string };
      const normalizedValue =
        typeof value === "string"
          ? value
          : {
              name: binaryValue.name ?? "blob",
              size: binaryValue.size,
              type: binaryValue.type,
            };

      const existing = record[key];
      if (existing === undefined) {
        record[key] = normalizedValue;
        continue;
      }

      if (Array.isArray(existing)) {
        existing.push(normalizedValue);
        continue;
      }

      record[key] = [existing, normalizedValue];
    }

    return record;
  }

  return body;
}

function redactValue(value: unknown, keyHint?: string): unknown {
  if (keyHint && SECRET_KEY_PATTERN.test(keyHint)) {
    return REDACTED_VALUE;
  }

  if (Array.isArray(value)) {
    return value.map((entry) => redactValue(entry));
  }

  if (!isRecord(value)) {
    return value;
  }

  const redacted: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value)) {
    redacted[key] = redactValue(child, key);
  }

  return redacted;
}

function redactHeaders(
  headers: Record<string, string> | undefined,
): Record<string, string> | undefined {
  if (!headers) {
    return undefined;
  }

  const redacted: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers)) {
    redacted[key] = SECRET_KEY_PATTERN.test(key) ? REDACTED_VALUE : value;
  }

  return redacted;
}

function serializePayload(
  payload: unknown,
  fallbackContentType: string,
): {
  contentType: string;
  jsonText?: string;
  textValue?: string;
  sha256: string;
} {
  const normalized = normalizeBody(payload);
  const redacted = redactValue(normalized);

  if (redacted === undefined) {
    return {
      contentType: fallbackContentType,
      textValue: "undefined",
      sha256: createHash("sha256").update("undefined").digest("hex"),
    };
  }

  if (typeof redacted === "string") {
    return {
      contentType: fallbackContentType,
      textValue: redacted,
      sha256: createHash("sha256").update(redacted).digest("hex"),
    };
  }

  const jsonText = JSON.stringify(redacted);

  return {
    contentType: "application/json",
    jsonText,
    sha256: createHash("sha256").update(jsonText).digest("hex"),
  };
}

function parsePayload(
  payloadJson: unknown,
  payloadText: unknown,
): unknown {
  const jsonValue = parseOptionalJson<unknown>(payloadJson);
  if (jsonValue !== undefined) {
    return jsonValue;
  }

  return toOptionalString(payloadText);
}

export class SqliteAuditStore {
  readonly databasePath: string;

  private readonly db: Database;
  private readonly now: () => Date;
  private readonly uuid: () => string;

  constructor(options: SqliteAuditStoreOptions = {}) {
    this.databasePath =
      options.databasePath ?? join(process.cwd(), ".state", "audit", "upsert.sqlite");
    mkdirSync(dirname(this.databasePath), { recursive: true });

    this.db = new Database(this.databasePath, {
      create: true,
      strict: true,
    });
    this.now = options.now ?? (() => new Date());
    this.uuid = options.uuid ?? (() => crypto.randomUUID());

    this.bootstrap();
  }

  close(): void {
    this.db.close(false);
  }

  recordRun(report: RunReport): void {
    const nowIso = this.now().toISOString();
    this.db
      .prepare(
        `INSERT INTO runs (
          run_id, status, mode, created_at, started_at, finished_at, options_json,
          totals_json, checkpoint_json, error_text, updated_at
        ) VALUES (
          $runId, $status, $mode, $createdAt, $startedAt, $finishedAt, $optionsJson,
          $totalsJson, $checkpointJson, $errorText, $updatedAt
        )
        ON CONFLICT(run_id) DO UPDATE SET
          status = excluded.status,
          mode = excluded.mode,
          created_at = excluded.created_at,
          started_at = excluded.started_at,
          finished_at = excluded.finished_at,
          options_json = excluded.options_json,
          totals_json = excluded.totals_json,
          checkpoint_json = excluded.checkpoint_json,
          error_text = excluded.error_text,
          updated_at = excluded.updated_at`,
      )
      .run({
        runId: report.runId,
        status: report.status,
        mode: report.mode,
        createdAt: report.createdAt,
        startedAt: report.startedAt ?? null,
        finishedAt: report.finishedAt ?? null,
        optionsJson: JSON.stringify(report.options),
        totalsJson: JSON.stringify(report.totals),
        checkpointJson: JSON.stringify(report.checkpoint),
        errorText: report.error ?? null,
        updatedAt: nowIso,
      });
  }

  recordRunItem(runId: string, item: RunItemOutcome): void {
    const nowIso = this.now().toISOString();
    this.db
      .prepare(
        `INSERT INTO run_items (
          run_id, item_key, external_ref, action, option_id, started_at, finished_at,
          latency_ms, error_text, decision_json, files_json, audit_json, created_at, updated_at
        ) VALUES (
          $runId, $itemKey, $externalRef, $action, $optionId, $startedAt, $finishedAt,
          $latencyMs, $errorText, $decisionJson, $filesJson, $auditJson, $createdAt, $updatedAt
        )
        ON CONFLICT(run_id, item_key) DO UPDATE SET
          external_ref = excluded.external_ref,
          action = excluded.action,
          option_id = excluded.option_id,
          started_at = excluded.started_at,
          finished_at = excluded.finished_at,
          latency_ms = excluded.latency_ms,
          error_text = excluded.error_text,
          decision_json = excluded.decision_json,
          files_json = excluded.files_json,
          audit_json = excluded.audit_json,
          updated_at = excluded.updated_at`,
      )
      .run({
        runId,
        itemKey: item.key,
        externalRef: item.externalRef ?? null,
        action: item.action,
        optionId: item.optionId ?? null,
        startedAt: item.startedAt,
        finishedAt: item.finishedAt,
        latencyMs: item.latencyMs,
        errorText: item.error ?? null,
        decisionJson: item.decision ? JSON.stringify(item.decision) : null,
        filesJson: JSON.stringify(item.files),
        auditJson: item.audit ? JSON.stringify(item.audit) : null,
        createdAt: nowIso,
        updatedAt: nowIso,
      });
  }

  recordStepEvent(input: AuditStepEventInput): void {
    const id = this.uuid();
    this.db
      .prepare(
        `INSERT INTO step_events (
          id, run_id, item_key, external_ref, option_id, step, component, event,
          level, message, duration_ms, data_json, created_at
        ) VALUES (
          $id, $runId, $itemKey, $externalRef, $optionId, $step, $component, $event,
          $level, $message, $durationMs, $dataJson, $createdAt
        )`,
      )
      .run({
        id,
        runId: input.context?.runId ?? null,
        itemKey: input.context?.itemKey ?? null,
        externalRef: input.context?.externalRef ?? null,
        optionId: input.context?.optionId ?? null,
        step: input.context?.step ?? null,
        component: input.component,
        event: input.event,
        level: input.level,
        message: input.message ?? null,
        durationMs: input.durationMs ?? null,
        dataJson: input.data ? JSON.stringify(redactValue(input.data)) : null,
        createdAt: this.now().toISOString(),
      });
  }

  recordArtifact(input: AuditArtifactInput): void {
    const serialized = serializePayload(
      input.payload,
      input.contentType ?? "text/plain",
    );

    this.db
      .prepare(
        `INSERT INTO artifacts (
          id, run_id, item_key, external_ref, option_id, step, artifact_type,
          content_type, sha256, payload_json, payload_text, created_at
        ) VALUES (
          $id, $runId, $itemKey, $externalRef, $optionId, $step, $artifactType,
          $contentType, $sha256, $payloadJson, $payloadText, $createdAt
        )`,
      )
      .run({
        id: this.uuid(),
        runId: input.context?.runId ?? null,
        itemKey: input.context?.itemKey ?? null,
        externalRef: input.context?.externalRef ?? null,
        optionId: input.context?.optionId ?? null,
        step: input.step,
        artifactType: input.artifactType,
        contentType: serialized.contentType,
        sha256: serialized.sha256,
        payloadJson: serialized.jsonText ?? null,
        payloadText: serialized.textValue ?? null,
        createdAt: this.now().toISOString(),
      });
  }

  recordHttpExchange(input: AuditHttpExchangeInput): void {
    const requestPayload = serializePayload(input.requestBody, "text/plain");
    const responsePayload = serializePayload(input.responseBody, "text/plain");

    this.db
      .prepare(
        `INSERT INTO http_exchanges (
          request_id, run_id, item_key, external_ref, option_id, step, method,
          path, url, attempt, status, request_headers_json, request_body_json,
          request_body_text, response_headers_json, response_body_json,
          response_body_text, duration_ms, error_text, created_at
        ) VALUES (
          $requestId, $runId, $itemKey, $externalRef, $optionId, $step, $method,
          $path, $url, $attempt, $status, $requestHeadersJson, $requestBodyJson,
          $requestBodyText, $responseHeadersJson, $responseBodyJson,
          $responseBodyText, $durationMs, $errorText, $createdAt
        )`,
      )
      .run({
        requestId: input.requestId ?? this.uuid(),
        runId: input.context?.runId ?? null,
        itemKey: input.context?.itemKey ?? null,
        externalRef: input.context?.externalRef ?? null,
        optionId: input.context?.optionId ?? null,
        step: input.context?.step ?? null,
        method: input.method,
        path: input.path,
        url: input.url,
        attempt: input.attempt,
        status: input.status ?? null,
        requestHeadersJson: input.requestHeaders
          ? JSON.stringify(redactHeaders(input.requestHeaders))
          : null,
        requestBodyJson: requestPayload.jsonText ?? null,
        requestBodyText: requestPayload.textValue ?? null,
        responseHeadersJson: input.responseHeaders
          ? JSON.stringify(redactHeaders(input.responseHeaders))
          : null,
        responseBodyJson: responsePayload.jsonText ?? null,
        responseBodyText: responsePayload.textValue ?? null,
        durationMs: input.durationMs ?? null,
        errorText: input.error ?? null,
        createdAt: this.now().toISOString(),
      });
  }

  recordFileSyncAttempt(input: AuditFileSyncAttemptInput): void {
    this.db
      .prepare(
        `INSERT INTO file_sync_attempts (
          id, run_id, item_key, external_ref, option_id, stage, status, file_name,
          source_url, request_json, response_json, error_text, created_at
        ) VALUES (
          $id, $runId, $itemKey, $externalRef, $optionId, $stage, $status, $fileName,
          $sourceUrl, $requestJson, $responseJson, $errorText, $createdAt
        )`,
      )
      .run({
        id: this.uuid(),
        runId: input.context?.runId ?? null,
        itemKey: input.context?.itemKey ?? null,
        externalRef: input.context?.externalRef ?? null,
        optionId: input.context?.optionId ?? null,
        stage: input.stage,
        status: input.status,
        fileName: input.fileName,
        sourceUrl: input.sourceUrl ?? null,
        requestJson: input.request ? JSON.stringify(redactValue(input.request)) : null,
        responseJson: input.response ? JSON.stringify(redactValue(input.response)) : null,
        errorText: input.error ?? null,
        createdAt: this.now().toISOString(),
      });
  }

  getRunSummary(runId: string): AuditRunSummary {
    const run = this.getRunReport(runId);
    const itemCount = this.countByRun("run_items", runId);
    const stepEventCount = this.countByRun("step_events", runId);
    const artifactCount = this.countByRun("artifacts", runId);
    const httpExchangeCount = this.countByRun("http_exchanges", runId);
    const fileSyncAttemptCount = this.countByRun("file_sync_attempts", runId);

    return {
      run,
      itemCount,
      stepEventCount,
      artifactCount,
      httpExchangeCount,
      fileSyncAttemptCount,
    };
  }

  getRunItemDetail(runId: string, itemKey: string): AuditRunItemDetail {
    const row = this.db
      .query<{
        external_ref: string | null;
        action: RunItemOutcome["action"];
        option_id: number | null;
        started_at: string;
        finished_at: string;
        latency_ms: number;
        error_text: string | null;
        decision_json: string | null;
        files_json: string;
        audit_json: string | null;
      }, { runId: string; itemKey: string }>(
        `SELECT external_ref, action, option_id, started_at, finished_at, latency_ms,
            error_text, decision_json, files_json, audit_json
         FROM run_items
         WHERE run_id = $runId AND item_key = $itemKey`,
      )
      .get({ runId, itemKey });

    return {
      item: row
        ? {
            key: itemKey,
            externalRef: row.external_ref ?? undefined,
            action: row.action,
            optionId: row.option_id ?? undefined,
            files: parseOptionalJson<RunItemOutcome["files"]>(row.files_json)!,
            error: row.error_text ?? undefined,
            startedAt: row.started_at,
            finishedAt: row.finished_at,
            latencyMs: row.latency_ms,
            decision: parseOptionalJson<RunItemOutcome["decision"]>(row.decision_json),
            audit: parseOptionalJson<RunItemOutcome["audit"]>(row.audit_json),
          }
        : null,
      stepEvents: this.db
        .query<{
          id: string;
          run_id: string;
          item_key: string | null;
          external_ref: string | null;
          option_id: number | null;
          step: string | null;
          component: string;
          event: string;
          level: AuditLevel;
          message: string | null;
          duration_ms: number | null;
          data_json: string | null;
          created_at: string;
        }, { runId: string; itemKey: string }>(
          `SELECT *
           FROM step_events
           WHERE run_id = $runId AND item_key = $itemKey
           ORDER BY created_at ASC, id ASC`,
        )
        .all({ runId, itemKey })
        .map((entry) => ({
          id: entry.id,
          runId: entry.run_id,
          itemKey: entry.item_key ?? undefined,
          externalRef: entry.external_ref ?? undefined,
          optionId: entry.option_id ?? undefined,
          step: entry.step ?? undefined,
          component: entry.component,
          event: entry.event,
          level: entry.level,
          message: entry.message ?? undefined,
          durationMs: entry.duration_ms ?? undefined,
          data: parseOptionalJson<Record<string, unknown>>(entry.data_json),
          createdAt: entry.created_at,
        })),
      artifacts: this.db
        .query<{
          id: string;
          run_id: string;
          item_key: string | null;
          external_ref: string | null;
          option_id: number | null;
          step: string;
          artifact_type: string;
          content_type: string;
          sha256: string;
          payload_json: string | null;
          payload_text: string | null;
          created_at: string;
        }, { runId: string; itemKey: string }>(
          `SELECT *
           FROM artifacts
           WHERE run_id = $runId AND item_key = $itemKey
           ORDER BY created_at ASC, id ASC`,
        )
        .all({ runId, itemKey })
        .map((entry) => ({
          id: entry.id,
          runId: entry.run_id,
          itemKey: entry.item_key ?? undefined,
          externalRef: entry.external_ref ?? undefined,
          optionId: entry.option_id ?? undefined,
          step: entry.step,
          artifactType: entry.artifact_type,
          contentType: entry.content_type,
          sha256: entry.sha256,
          payload: parsePayload(entry.payload_json, entry.payload_text),
          createdAt: entry.created_at,
        })),
      httpExchanges: this.db
        .query<{
          request_id: string;
          run_id: string | null;
          item_key: string | null;
          external_ref: string | null;
          option_id: number | null;
          step: string | null;
          method: string;
          path: string;
          url: string;
          attempt: number;
          status: number | null;
          request_headers_json: string | null;
          request_body_json: string | null;
          request_body_text: string | null;
          response_headers_json: string | null;
          response_body_json: string | null;
          response_body_text: string | null;
          duration_ms: number | null;
          error_text: string | null;
          created_at: string;
        }, { runId: string; itemKey: string }>(
          `SELECT *
           FROM http_exchanges
           WHERE run_id = $runId AND item_key = $itemKey
           ORDER BY created_at ASC, request_id ASC`,
        )
        .all({ runId, itemKey })
        .map((entry) => ({
          requestId: entry.request_id,
          runId: entry.run_id ?? undefined,
          itemKey: entry.item_key ?? undefined,
          externalRef: entry.external_ref ?? undefined,
          optionId: entry.option_id ?? undefined,
          step: entry.step ?? undefined,
          method: entry.method,
          path: entry.path,
          url: entry.url,
          attempt: entry.attempt,
          status: entry.status ?? undefined,
          requestHeaders: parseOptionalJson<Record<string, unknown>>(entry.request_headers_json),
          requestBody: parsePayload(entry.request_body_json, entry.request_body_text),
          responseHeaders: parseOptionalJson<Record<string, unknown>>(entry.response_headers_json),
          responseBody: parsePayload(entry.response_body_json, entry.response_body_text),
          durationMs: entry.duration_ms ?? undefined,
          error: entry.error_text ?? undefined,
          createdAt: entry.created_at,
        })),
      fileSyncAttempts: this.db
        .query<{
          id: string;
          run_id: string;
          item_key: string;
          external_ref: string | null;
          option_id: number | null;
          stage: string;
          status: string;
          file_name: string;
          source_url: string | null;
          request_json: string | null;
          response_json: string | null;
          error_text: string | null;
          created_at: string;
        }, { runId: string; itemKey: string }>(
          `SELECT *
           FROM file_sync_attempts
           WHERE run_id = $runId AND item_key = $itemKey
           ORDER BY created_at ASC, id ASC`,
        )
        .all({ runId, itemKey })
        .map((entry) => ({
          id: entry.id,
          runId: entry.run_id,
          itemKey: entry.item_key,
          externalRef: entry.external_ref ?? undefined,
          optionId: entry.option_id ?? undefined,
          stage: entry.stage,
          status: entry.status,
          fileName: entry.file_name,
          sourceUrl: entry.source_url ?? undefined,
          request: parseOptionalJson<unknown>(entry.request_json),
          response: parseOptionalJson<unknown>(entry.response_json),
          error: entry.error_text ?? undefined,
          createdAt: entry.created_at,
        })),
    };
  }

  private getRunReport(runId: string): RunReport | null {
    const row = this.db
      .query<{
        run_id: string;
        status: RunReport["status"];
        mode: RunReport["mode"];
        created_at: string;
        started_at: string | null;
        finished_at: string | null;
        options_json: string;
        totals_json: string;
        checkpoint_json: string;
        error_text: string | null;
      }, { runId: string }>(
        `SELECT run_id, status, mode, created_at, started_at, finished_at,
            options_json, totals_json, checkpoint_json, error_text
         FROM runs
         WHERE run_id = $runId`,
      )
      .get({ runId });

    if (!row) {
      return null;
    }

    return {
      runId: row.run_id,
      status: row.status,
      mode: row.mode,
      createdAt: row.created_at,
      startedAt: row.started_at ?? undefined,
      finishedAt: row.finished_at ?? undefined,
      options: parseOptionalJson<RunReport["options"]>(row.options_json)!,
      totals: parseOptionalJson<RunReport["totals"]>(row.totals_json)!,
      checkpoint: parseOptionalJson<RunReport["checkpoint"]>(row.checkpoint_json)!,
      items: [],
      error: row.error_text ?? undefined,
    };
  }

  private countByRun(tableName: string, runId: string): number {
    const row = this.db
      .query<{ count: number }, { runId: string }>(
        `SELECT COUNT(*) as count FROM ${tableName} WHERE run_id = $runId`,
      )
      .get({ runId });

    return row?.count ?? 0;
  }

  private bootstrap(): void {
    this.db.run("PRAGMA journal_mode = WAL");
    this.db.run("PRAGMA synchronous = NORMAL");
    this.db.run("PRAGMA foreign_keys = ON");
    this.db.run(`
      CREATE TABLE IF NOT EXISTS runs (
        run_id TEXT PRIMARY KEY,
        status TEXT NOT NULL,
        mode TEXT NOT NULL,
        created_at TEXT NOT NULL,
        started_at TEXT,
        finished_at TEXT,
        options_json TEXT NOT NULL,
        totals_json TEXT NOT NULL,
        checkpoint_json TEXT NOT NULL,
        error_text TEXT,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS run_items (
        run_id TEXT NOT NULL,
        item_key TEXT NOT NULL,
        external_ref TEXT,
        action TEXT NOT NULL,
        option_id INTEGER,
        started_at TEXT NOT NULL,
        finished_at TEXT NOT NULL,
        latency_ms INTEGER NOT NULL,
        error_text TEXT,
        decision_json TEXT,
        files_json TEXT NOT NULL,
        audit_json TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        PRIMARY KEY (run_id, item_key),
        FOREIGN KEY (run_id) REFERENCES runs(run_id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS step_events (
        id TEXT PRIMARY KEY,
        run_id TEXT,
        item_key TEXT,
        external_ref TEXT,
        option_id INTEGER,
        step TEXT,
        component TEXT NOT NULL,
        event TEXT NOT NULL,
        level TEXT NOT NULL,
        message TEXT,
        duration_ms INTEGER,
        data_json TEXT,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS artifacts (
        id TEXT PRIMARY KEY,
        run_id TEXT,
        item_key TEXT,
        external_ref TEXT,
        option_id INTEGER,
        step TEXT NOT NULL,
        artifact_type TEXT NOT NULL,
        content_type TEXT NOT NULL,
        sha256 TEXT NOT NULL,
        payload_json TEXT,
        payload_text TEXT,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS http_exchanges (
        request_id TEXT PRIMARY KEY,
        run_id TEXT,
        item_key TEXT,
        external_ref TEXT,
        option_id INTEGER,
        step TEXT,
        method TEXT NOT NULL,
        path TEXT NOT NULL,
        url TEXT NOT NULL,
        attempt INTEGER NOT NULL,
        status INTEGER,
        request_headers_json TEXT,
        request_body_json TEXT,
        request_body_text TEXT,
        response_headers_json TEXT,
        response_body_json TEXT,
        response_body_text TEXT,
        duration_ms INTEGER,
        error_text TEXT,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS file_sync_attempts (
        id TEXT PRIMARY KEY,
        run_id TEXT NOT NULL,
        item_key TEXT NOT NULL,
        external_ref TEXT,
        option_id INTEGER,
        stage TEXT NOT NULL,
        status TEXT NOT NULL,
        file_name TEXT NOT NULL,
        source_url TEXT,
        request_json TEXT,
        response_json TEXT,
        error_text TEXT,
        created_at TEXT NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_run_items_external_ref
      ON run_items (external_ref);

      CREATE INDEX IF NOT EXISTS idx_run_items_option_id
      ON run_items (option_id);

      CREATE INDEX IF NOT EXISTS idx_step_events_run_item
      ON step_events (run_id, item_key, created_at);

      CREATE INDEX IF NOT EXISTS idx_artifacts_run_item
      ON artifacts (run_id, item_key, created_at);

      CREATE INDEX IF NOT EXISTS idx_http_exchanges_run_item
      ON http_exchanges (run_id, item_key, created_at);

      CREATE INDEX IF NOT EXISTS idx_file_sync_attempts_run_item
      ON file_sync_attempts (run_id, item_key, created_at);
    `);
  }
}
