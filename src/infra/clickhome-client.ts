import type {
  DeepPartial,
  ExistingRemoteFile,
  JsonPatchOperation,
  Logger,
  TenderOptionUpsertClient,
  UploadFileRequest,
} from "@/types/upsert";
import type { TenderOptionModel } from "@/types/interfaces.codegen";
import { ObservabilityStore } from "@/infra/observability";

export class HttpError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(message: string, status: number, body: unknown) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

export interface ClickHomeClientOptions {
  baseUrl: string;
  apiKey: string;
  maxRetries?: number;
  retryBaseDelayMs?: number;
  fetchImpl?: typeof fetch;
  logger?: Logger;
  observability?: ObservabilityStore;
}

interface RequestOptions {
  method: string;
  path: string;
  body?: unknown;
  headers?: Record<string, string>;
  retry?: boolean;
  quietHttpStatuses?: number[];
}

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

function toNumber(value: unknown): number | undefined {
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

function toStringValue(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }

  return undefined;
}

function asMutableRecord(value: unknown): Record<string, unknown> | null {
  if (!isRecord(value)) {
    return null;
  }

  return { ...value };
}

function withTenderOptionCategoryIdAlias(body: unknown): unknown {
  const record = asMutableRecord(body);
  if (!record || record.categoryId !== undefined) {
    return body;
  }

  const categoryId = toNumber(
    readPath(record, "tenderOptionCategory.tenderOptionCategoryId"),
  );
  if (categoryId === undefined) {
    return body;
  }

  record.categoryId = categoryId;
  return record;
}

function extractResults(payload: unknown): Record<string, unknown>[] {
  if (Array.isArray(payload)) {
    return payload.filter((entry): entry is Record<string, unknown> =>
      isRecord(entry),
    );
  }

  if (!isRecord(payload)) {
    return [];
  }

  const resultCandidates = [payload.results, payload.result, payload.list];
  for (const candidate of resultCandidates) {
    if (Array.isArray(candidate)) {
      return candidate.filter((entry): entry is Record<string, unknown> =>
        isRecord(entry),
      );
    }
  }

  return [payload];
}

function normalizeExistingFiles(payload: unknown): ExistingRemoteFile[] {
  const items = extractResults(payload);

  const normalized: Array<ExistingRemoteFile | null> = items.map((item) => {
    const fileName =
      toStringValue(item.fileName) ??
      toStringValue(item.documentName) ??
      toStringValue(item.title) ??
      toStringValue(item.name) ??
      toStringValue(readPath(item, "file.fileName")) ??
      toStringValue(readPath(item, "file.documentName")) ??
      toStringValue(readPath(item, "file.title")) ??
      toStringValue(readPath(item, "file.name"));

    if (!fileName) {
      return null;
    }

    return {
      fileName,
      size:
        toNumber(item.size) ??
        toNumber(item.fileSize) ??
        toNumber(readPath(item, "file.size")),
      hash:
        toStringValue(item.hash) ??
        toStringValue(item.eTag) ??
        toStringValue(item.md5) ??
        toStringValue(readPath(item, "file.hash")) ??
        toStringValue(readPath(item, "file.eTag")),
    };
  });

  const deduped = new Map<string, ExistingRemoteFile>();
  for (const file of normalized) {
    if (!file) {
      continue;
    }

    const key = `${file.fileName.toLowerCase()}|${file.size ?? ""}|${file.hash ?? ""}`;
    if (!deduped.has(key)) {
      deduped.set(key, file);
    }
  }

  return [...deduped.values()];
}

export class ClickHomeClient implements TenderOptionUpsertClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly maxRetries: number;
  private readonly retryBaseDelayMs: number;
  private readonly fetchImpl: typeof fetch;
  private readonly logger: Logger | null;
  private readonly observability: ObservabilityStore | null;

  private sessionToken: string | null = null;
  private loginPromise: Promise<string> | null = null;

  constructor(options: ClickHomeClientOptions) {
    this.baseUrl = options.baseUrl.endsWith("/")
      ? options.baseUrl
      : `${options.baseUrl}/`;
    this.apiKey = options.apiKey;
    this.maxRetries = options.maxRetries ?? 3;
    this.retryBaseDelayMs = options.retryBaseDelayMs ?? 250;
    this.fetchImpl = options.fetchImpl ?? fetch;
    this.logger = options.logger ?? null;
    this.observability = options.observability ?? null;
  }

  async listTenderOptionsByExternalRef(params: {
    externalRef: string;
    vendorModel?: string;
  }): Promise<Record<string, unknown>[]> {
    const criteria: Record<string, unknown> = {
      customValue1: params.externalRef,
      includeInactive: true,
    };

    if (params.vendorModel) {
      criteria.vendorModel = params.vendorModel;
    }

    const requestBody = {
      criteria,
      selection: {},
      pagination: {
        skip: 0,
        take: 25,
      },
    };

    this.logger?.info("ClickHome TenderOptions/List request", {
      externalRef: params.externalRef,
      vendorModel: params.vendorModel,
      path: "V2/AdminSetup/TenderOptions/List",
      requestBody,
    });

    try {
      const response = await this.request<Record<string, unknown>>({
        method: "POST",
        path: "V2/AdminSetup/TenderOptions/List",
        body: requestBody,
      });

      const results = extractResults(response);

      this.logger?.info("ClickHome TenderOptions/List response", {
        externalRef: params.externalRef,
        vendorModel: params.vendorModel,
        resultCount: results.length,
        rawResponse: response,
      });

      return results;
    } catch (error) {
      this.logger?.error("ClickHome TenderOptions/List failed", {
        externalRef: params.externalRef,
        vendorModel: params.vendorModel,
        path: "V2/AdminSetup/TenderOptions/List",
        requestBody,
        error: error instanceof Error ? error.message : String(error),
        status: error instanceof HttpError ? error.status : undefined,
        responseBody: error instanceof HttpError ? error.body : undefined,
        stack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  async createTenderOption(
    model: DeepPartial<TenderOptionModel>,
  ): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>({
      method: "POST",
      path: "V2/AdminSetup/TenderOptions",
      body: withTenderOptionCategoryIdAlias(model),
    });
  }

  async patchTenderOptionJsonPatch(
    optionId: number,
    patch: JsonPatchOperation[],
  ): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>({
      method: "PATCH",
      path: `V2/AdminSetup/TenderOptions/${optionId}`,
      body: patch,
      headers: {
        "Content-Type": "application/json-patch+json",
      },
    });
  }

  async patchTenderOptionMerge(
    optionId: number,
    payload: DeepPartial<TenderOptionModel>,
  ): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>({
      method: "PATCH",
      path: `V2/AdminSetup/TenderOptions/${optionId}`,
      body: withTenderOptionCategoryIdAlias(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async listTenderOptionFilesPreferred(
    optionId: number,
  ): Promise<ExistingRemoteFile[]> {
    const response = await this.request<unknown>({
      method: "GET",
      path: `V2/AdminSetup/TenderOptions/${optionId}/Files`,
      retry: false,
      quietHttpStatuses: [404],
    });

    return normalizeExistingFiles(response);
  }

  async listTenderOptionFilesFallback(
    optionId: number,
  ): Promise<ExistingRemoteFile[]> {
    const aggregated: ExistingRemoteFile[] = [];

    try {
      const docsResponse = await this.request<unknown>({
        method: "POST",
        path: `V2/Products/Options/${optionId}/Documents`,
        body: {
          pagination: {
            skip: 0,
            take: 1000,
          },
        },
        retry: false,
      });
      aggregated.push(...normalizeExistingFiles(docsResponse));
    } catch {
      // best effort fallback
    }

    try {
      const filesResponse = await this.request<unknown>({
        method: "POST",
        path: "V2/Files/List",
        body: {
          criteria: {
            productSearch: String(optionId),
          },
          pagination: {
            skip: 0,
            take: 1000,
          },
        },
        retry: false,
      });
      aggregated.push(...normalizeExistingFiles(filesResponse));
    } catch {
      // best effort fallback
    }

    const deduped = new Map<string, ExistingRemoteFile>();
    for (const file of aggregated) {
      const key = `${file.fileName.toLowerCase()}|${file.size ?? ""}|${file.hash ?? ""}`;
      if (!deduped.has(key)) {
        deduped.set(key, file);
      }
    }

    return [...deduped.values()];
  }

  async uploadTenderOptionFile(
    requestPayload: UploadFileRequest,
  ): Promise<Record<string, unknown>> {
    const formData = new FormData();
    formData.append("Name", requestPayload.fileName);
    formData.append("Path", requestPayload.path);

    if (requestPayload.title) {
      formData.append("Title", requestPayload.title);
    }

    if (requestPayload.keyWords) {
      formData.append("KeyWords", requestPayload.keyWords);
    }

    if (requestPayload.thumbnailUrl) {
      formData.append("ThumbnailUrl", requestPayload.thumbnailUrl);
    }

    if (requestPayload.smallUrl) {
      formData.append("SmallUrl", requestPayload.smallUrl);
    }

    if (requestPayload.mediumUrl) {
      formData.append("MediumUrl", requestPayload.mediumUrl);
    }

    if (requestPayload.largeUrl) {
      formData.append("LargeUrl", requestPayload.largeUrl);
    }

    return this.request<Record<string, unknown>>({
      method: "POST",
      path: `V2/AdminSetup/TenderOptions/${requestPayload.optionId}/AddFile`,
      body: formData,
    });
  }

  private async login(): Promise<string> {
    const url = new URL("V2/ApiKeyLogin", this.baseUrl).toString();

    const response = await this.fetchImpl(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ApiKey: this.apiKey }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new HttpError(
        "ClickHome API key login failed",
        response.status,
        body,
      );
    }

    const token = response.headers.get("ClickHomeApiToken");
    if (!token || token.trim().length === 0) {
      throw new Error(
        "ClickHome login succeeded but no ClickHomeApiToken header in response",
      );
    }

    this.sessionToken = token;
    return token;
  }

  private async ensureAuthenticated(): Promise<string> {
    if (this.sessionToken) {
      return this.sessionToken;
    }

    if (this.loginPromise) {
      return this.loginPromise;
    }

    this.loginPromise = this.login().finally(() => {
      this.loginPromise = null;
    });

    return this.loginPromise;
  }

  private invalidateSession(): void {
    this.sessionToken = null;
  }

  private async request<T>(options: RequestOptions): Promise<T> {
    const startedAt = Date.now();
    let attempt = 0;
    let lastError: unknown;
    let hasReauthenticated = false;

    while (attempt <= this.maxRetries) {
      try {
        const token = await this.ensureAuthenticated();
        return await this.executeRequest<T>(options, token);
      } catch (error) {
        lastError = error;

        if (
          error instanceof HttpError &&
          error.status === 401 &&
          !hasReauthenticated
        ) {
          this.logger?.warn("ClickHome 401 received, re-authenticating", {
            method: options.method,
            path: options.path,
            attempt,
          });
          this.invalidateSession();
          hasReauthenticated = true;
          continue;
        }

        const shouldRetryRequest =
          options.retry !== false &&
          this.shouldRetry(error) &&
          attempt < this.maxRetries;

        if (!shouldRetryRequest) {
          this.observability?.incrementCounter("clickhome.request.total", 1, {
            method: options.method,
            path: options.path,
            outcome: "error",
          });
          this.observability?.observeDuration(
            "clickhome.request.duration_ms",
            Date.now() - startedAt,
            {
              method: options.method,
              path: options.path,
              outcome: "error",
            },
          );
          throw error;
        }

        const delayMs =
          this.retryBaseDelayMs * 2 ** attempt +
          Math.round(Math.random() * 100);
        this.logger?.warn("ClickHome request retrying", {
          method: options.method,
          path: options.path,
          attempt: attempt + 1,
          maxRetries: this.maxRetries,
          delayMs,
          error: error instanceof Error ? error.message : String(error),
          status: error instanceof HttpError ? error.status : undefined,
        });
        await Bun.sleep(delayMs);
        attempt += 1;
      }
    }

    this.observability?.incrementCounter("clickhome.request.total", 1, {
      method: options.method,
      path: options.path,
      outcome: "error",
    });
    this.observability?.observeDuration(
      "clickhome.request.duration_ms",
      Date.now() - startedAt,
      {
        method: options.method,
        path: options.path,
        outcome: "error",
      },
    );
    throw lastError;
  }

  private shouldRetry(error: unknown): boolean {
    if (error instanceof HttpError) {
      return [429, 502, 503, 504].includes(error.status);
    }

    return error instanceof Error;
  }

  private async executeRequest<T>(
    options: RequestOptions,
    token: string,
  ): Promise<T> {
    const startedAt = Date.now();
    const url = new URL(
      options.path.replace(/^\//, ""),
      this.baseUrl,
    ).toString();
    const headers = new Headers(options.headers);
    headers.set("ClickHomeApiToken", token);

    let body: RequestInit["body"];
    if (options.body !== undefined) {
      if (options.body instanceof FormData) {
        body = options.body;
      } else {
        if (!headers.has("Content-Type")) {
          headers.set("Content-Type", "application/json");
          headers.set("Accept", "application/json");
        }
        body = JSON.stringify(options.body);
      }
    }

    this.logger?.info("ClickHome HTTP request", {
      method: options.method,
      url,
      path: options.path,
      contentType: headers.get("Content-Type"),
    });
    this.observability?.recordEvent({
      level: "info",
      component: "clickhome-client",
      event: "clickhome.request.started",
      message: "ClickHome HTTP request started",
      data: {
        method: options.method,
        path: options.path,
        contentType: headers.get("Content-Type"),
      },
    });

    const response = await this.fetchImpl(url, {
      method: options.method,
      headers,
      body,
    });

    const responseText = await response.text();
    const parsedBody = this.parseResponseBody(responseText);

    if (!response.ok) {
      const shouldLogAsError = !options.quietHttpStatuses?.includes(response.status);
      if (shouldLogAsError) {
        this.observability?.recordEvent({
          level: "error",
          component: "clickhome-client",
          event: "clickhome.request.failed",
          message: "ClickHome HTTP request failed",
          durationMs: Date.now() - startedAt,
          data: {
            method: options.method,
            path: options.path,
            status: response.status,
            statusText: response.statusText,
            responseBody: parsedBody,
          },
        });
        this.logger?.error("ClickHome HTTP error response", {
          method: options.method,
          url,
          path: options.path,
          status: response.status,
          statusText: response.statusText,
          responseBody: parsedBody,
          responseHeaders: Object.fromEntries(response.headers.entries()),
        });
      }

      throw new HttpError(
        `ClickHome request failed: ${options.method} ${options.path}`,
        response.status,
        parsedBody,
      );
    }

    if (parsedBody === undefined) {
      this.observability?.incrementCounter("clickhome.request.total", 1, {
        method: options.method,
        path: options.path,
        outcome: "success",
      });
      this.observability?.observeDuration(
        "clickhome.request.duration_ms",
        Date.now() - startedAt,
        {
          method: options.method,
          path: options.path,
          outcome: "success",
        },
      );
      return {} as T;
    }

    this.observability?.recordEvent({
      level: "info",
      component: "clickhome-client",
      event: "clickhome.request.completed",
      message: "ClickHome HTTP request completed",
      durationMs: Date.now() - startedAt,
      data: {
        method: options.method,
        path: options.path,
        status: response.status,
      },
    });
    this.observability?.incrementCounter("clickhome.request.total", 1, {
      method: options.method,
      path: options.path,
      outcome: "success",
    });
    this.observability?.observeDuration(
      "clickhome.request.duration_ms",
      Date.now() - startedAt,
      {
        method: options.method,
        path: options.path,
        outcome: "success",
      },
    );

    if (isRecord(parsedBody)) {
      return parsedBody as T;
    }

    return parsedBody as T;
  }

  private parseResponseBody(body: string): unknown {
    if (!body || body.trim().length === 0) {
      return undefined;
    }

    try {
      return JSON.parse(body) as unknown;
    } catch {
      return body;
    }
  }
}
