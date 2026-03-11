import { TenderOptionModel } from "./interfaces.codegen";

export type DeepPartial<T> = T extends readonly (infer U)[]
  ? DeepPartial<U>[]
  : T extends (infer U)[]
    ? DeepPartial<U>[]
    : T extends object
      ? {
          [K in keyof T]?: DeepPartial<T[K]>;
        }
      : T;

export type RunStatus =
  | "queued"
  | "running"
  | "completed"
  | "failed"
  | "cancelled";

export type UpsertAction =
  | "create"
  | "create_dry_run"
  | "update"
  | "update_dry_run"
  | "skip_unchanged"
  | "error_missing_identity"
  | "error_duplicate_identity"
  | "error_validation"
  | "error_runtime";

export interface SourceMetadata {
  s3Key: string;
  eTag?: string;
  lastModified?: string;
  size?: number;
}

export interface NormalizedAttachment {
  fileName: string;
  url?: string;
  path?: string;
  thumbnailUrl?: string;
  smallUrl?: string;
  mediumUrl?: string;
  largeUrl?: string;
  s3Key?: string;
  contentBase64?: string;
  mimeType?: string;
  size?: number;
  hash?: string;
  title?: string;
  keyWords?: string;
}

export interface NormalizedProductAttribute {
  name: string;
  value?: string;
}

export interface NormalizedEnrichedProduct {
  source: SourceMetadata;
  sku: string;
  externalRef: string;
  optionName: string;
  categoryId: number;
  businessUnitId?: number;
  resourceCodeId?: number;
  supplierId?: number;
  supplierName?: string;
  supplierConfidence?: string;
  addendum?: string;
  brand?: string;
  shortDescription?: string;
  clientDescription?: string;
  colourList?: string;
  colourName?: string;
  productDescription?: string;
  productSpecs?: string;
  specificationSummaryText?: string;
  specifications?: string[];
  attributes?: NormalizedProductAttribute[];
  family?: string;
  productUrl?: string;
  vendorModel?: string;
  defaultQuantity?: number;
  priceDisplay?: number;
  optionAvailable?: string;
  optionExpired?: string;
  allHouseTypes?: boolean;
  assembly?: boolean;
  canEditColour?: boolean;
  colourRequired?: boolean;
  estimatingRequired?: boolean;
  hiddenOption?: boolean;
  optionOverrideable?: boolean;
  quantityRequired?: boolean;
  selectionPlaceHolder?: number;
  useHeroImage?: boolean;
  visibleByMyHome?: boolean;
  visibleBySales?: boolean;
  visibleBySelections?: boolean;
  attachments: NormalizedAttachment[];
  relatedProducts?: string[];
  raw: Record<string, unknown>;
}

export interface NormalizationError {
  code: "missing_identity" | "missing_required_fields" | "invalid_payload";
  message: string;
}

export type NormalizationResult =
  | { ok: true; value: NormalizedEnrichedProduct }
  | { ok: false; error: NormalizationError };

export interface RunOptions {
  dryRun?: boolean;
  prefix?: string;
  limit?: number;
  startAfter?: string;
  concurrency?: number;
  fileConcurrency?: number;
  resumeFromCheckpoint?: boolean;
}

export interface AppliedRunOptions {
  dryRun: boolean;
  prefix: string;
  limit?: number;
  startAfter?: string;
  concurrency: number;
  fileConcurrency: number;
  resumeFromCheckpoint: boolean;
}

export interface JsonPatchOperation {
  op: "add" | "remove" | "replace";
  path: string;
  value?: unknown;
}

export interface UpsertDecision {
  action: "create" | "update" | "skip_unchanged";
  reason: string;
  optionId?: number;
  jsonPatchOperations?: JsonPatchOperation[];
  mergePatchObject?: DeepPartial<TenderOptionModel>;
}

export interface FileSyncSummary {
  listedExisting: number;
  uploaded: number;
  skippedExisting: number;
  failed: number;
  wouldUpload: number;
}

export interface ItemAudit {
  mappedPayloadHash?: string;
  jsonPatchHash?: string;
  mergePayloadHash?: string;
  responseId?: number;
  patchStrategy?: "json-patch" | "merge-object";
}

export interface RunItemOutcome {
  key: string;
  externalRef?: string;
  action: UpsertAction;
  decision?: UpsertDecision;
  optionId?: number;
  files: FileSyncSummary;
  error?: string;
  startedAt: string;
  finishedAt: string;
  latencyMs: number;
  audit?: ItemAudit;
}

export interface RunTotals {
  scanned: number;
  parsed: number;
  created: number;
  updated: number;
  skipped: number;
  errored: number;
  filesUploaded: number;
  filesSkipped: number;
}

export interface RunCheckpoint {
  lastProcessedKey?: string;
  updatedAt?: string;
}

export interface RunReport {
  runId: string;
  status: RunStatus;
  mode: "dry-run" | "apply";
  startedAt?: string;
  finishedAt?: string;
  createdAt: string;
  options: AppliedRunOptions;
  totals: RunTotals;
  checkpoint: RunCheckpoint;
  items: RunItemOutcome[];
  error?: string;
}

export interface S3JsonObjectSummary {
  key: string;
  eTag?: string;
  lastModified?: string;
  size?: number;
}

export interface ListSourceOptions {
  prefixPattern: string;
  startAfter?: string;
  limit?: number;
}

export interface TenderOptionUpsertSource {
  listJsonObjects(
    options: ListSourceOptions,
  ): AsyncGenerator<S3JsonObjectSummary>;
  readJsonObject(key: string): Promise<unknown>;
  readBinaryObject(key: string): Promise<Uint8Array>;
}

export interface ExistingRemoteFile {
  fileName: string;
  size?: number;
  hash?: string;
}

export interface UploadFileRequest {
  optionId: number;
  fileName: string;
  title?: string;
  keyWords?: string;
  path: string;
  thumbnailUrl?: string;
  smallUrl?: string;
  mediumUrl?: string;
  largeUrl?: string;
}

export interface TenderOptionUpsertClient {
  listTenderOptionsByExternalRef(params: {
    externalRef: string;
    vendorModel?: string;
  }): Promise<Record<string, unknown>[]>;
  createTenderOption(
    model: DeepPartial<TenderOptionModel>,
  ): Promise<Record<string, unknown>>;
  patchTenderOptionJsonPatch(
    optionId: number,
    patch: JsonPatchOperation[],
  ): Promise<Record<string, unknown>>;
  patchTenderOptionMerge(
    optionId: number,
    payload: DeepPartial<TenderOptionModel>,
  ): Promise<Record<string, unknown>>;
  listTenderOptionFilesPreferred(
    optionId: number,
  ): Promise<ExistingRemoteFile[]>;
  listTenderOptionFilesFallback(
    optionId: number,
  ): Promise<ExistingRemoteFile[]>;
  uploadTenderOptionFile(
    request: UploadFileRequest,
  ): Promise<Record<string, unknown>>;
}

export interface Logger {
  info(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(message: string, meta?: Record<string, unknown>): void;
}

export function createEmptyTotals(): RunTotals {
  return {
    scanned: 0,
    parsed: 0,
    created: 0,
    updated: 0,
    skipped: 0,
    errored: 0,
    filesUploaded: 0,
    filesSkipped: 0,
  };
}
