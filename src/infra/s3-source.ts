import { S3Client } from "bun";

import { ObservabilityStore } from "@/infra/observability";
import type {
  ListSourceOptions,
  Logger,
  S3JsonObjectSummary,
  TenderOptionUpsertSource,
} from "@/types/upsert";

interface S3FileLike {
  json(): Promise<unknown>;
  arrayBuffer(): Promise<ArrayBuffer>;
}

interface S3ClientLike {
  list(input?: Record<string, unknown>): Promise<Record<string, unknown>>;
  file(path: string): S3FileLike;
}

export interface S3SourceOptions {
  bucket: string;
  accessKeyId: string;
  secretAccessKey: string;
  endpoint?: string;
  client?: S3ClientLike;
  logger?: Logger;
  observability?: ObservabilityStore;
}

export function globToRegExp(globPattern: string): RegExp {
  const escaped = globPattern
    .replace(/[-[\]{}()+?.\\^$|]/g, "\\$&")
    .replace(/\*\*\//g, "::DOUBLE_STAR_DIR::")
    .replace(/\*\*/g, "::DOUBLE_STAR::")
    .replace(/\*/g, "[^/]*")
    .replace(/::DOUBLE_STAR_DIR::/g, "(?:.*/)?")
    .replace(/::DOUBLE_STAR::/g, ".*");

  return new RegExp(`^${escaped}$`);
}

function buildListPrefix(prefixPattern: string): string {
  const wildcardIndex = prefixPattern.search(/[\*\?]/);
  if (wildcardIndex === -1) {
    return prefixPattern;
  }

  return prefixPattern.slice(0, wildcardIndex);
}

export function createKeyMatcher(
  prefixPattern: string,
): (key: string) => boolean {
  const hasWildcard = /[\*\?]/.test(prefixPattern);
  const matcher = hasWildcard
    ? globToRegExp(prefixPattern)
    : new RegExp(`^${prefixPattern.replace(/[-[\]{}()+?.\\^$|]/g, "\\$&")}`);

  return (key: string) =>
    matcher.test(key) && key.toLowerCase().endsWith(".json");
}

export class S3Source implements TenderOptionUpsertSource {
  private readonly client: S3ClientLike;
  private readonly logger: Logger | null;
  private readonly observability: ObservabilityStore | null;

  constructor(options: S3SourceOptions) {
    this.client =
      options.client ??
      (new S3Client({
        bucket: options.bucket,
        accessKeyId: options.accessKeyId,
        secretAccessKey: options.secretAccessKey,
        endpoint: options.endpoint,
        region: "us-east-1",
      }) as unknown as S3ClientLike);
    this.logger = options.logger ?? null;
    this.observability = options.observability ?? null;
  }

  async *listJsonObjects(
    options: ListSourceOptions,
  ): AsyncGenerator<S3JsonObjectSummary> {
    const startedAt = Date.now();
    const matcher = createKeyMatcher(options.prefixPattern);
    const prefix = buildListPrefix(options.prefixPattern);

    let continuationToken: string | undefined;
    let startAfter = options.startAfter;
    let yielded = 0;

    while (true) {
      const request: Record<string, unknown> = {
        prefix,
        maxKeys: 1000,
      };

      if (continuationToken) {
        request.continuationToken = continuationToken;
      } else if (startAfter) {
        request.startAfter = startAfter;
      }

      const response = await this.client.list(request);
      const contents = Array.isArray(response.contents)
        ? (response.contents as Record<string, unknown>[])
        : [];

      this.logger?.info("S3 list page fetched", {
        prefix,
        continuationToken,
        startAfter,
        responseCount: contents.length,
      });
      this.observability?.incrementCounter("s3.list.pages.total");
      this.observability?.recordEvent({
        level: "info",
        component: "s3-source",
        event: "s3.list.page",
        message: "Fetched S3 object listing page",
        data: {
          prefix,
          continuationToken,
          startAfter,
          responseCount: contents.length,
        },
      });

      for (const object of contents) {
        const key = typeof object.key === "string" ? object.key : undefined;
        if (!key || !matcher(key)) {
          continue;
        }

        yield {
          key,
          eTag: typeof object.eTag === "string" ? object.eTag : undefined,
          lastModified:
            typeof object.lastModified === "string"
              ? object.lastModified
              : undefined,
          size: typeof object.size === "number" ? object.size : undefined,
        };

        yielded += 1;
        if (options.limit !== undefined && yielded >= options.limit) {
          this.observability?.observeDuration(
            "s3.list.duration_ms",
            Date.now() - startedAt,
          );
          return;
        }
      }

      const isTruncated = Boolean(response.isTruncated);
      const nextContinuationToken =
        typeof response.nextContinuationToken === "string"
          ? response.nextContinuationToken
          : undefined;

      if (!isTruncated) {
        break;
      }

      if (nextContinuationToken) {
        continuationToken = nextContinuationToken;
        startAfter = undefined;
        continue;
      }

      const lastObject = contents.at(-1);
      const lastKey = lastObject?.key;
      if (typeof lastKey !== "string") {
        break;
      }

      startAfter = lastKey;
      continuationToken = undefined;
    }

    this.observability?.observeDuration(
      "s3.list.duration_ms",
      Date.now() - startedAt,
    );
  }

  async readJsonObject(key: string): Promise<unknown> {
    const startedAt = Date.now();
    const file = this.client.file(key);
    try {
      const payload = await file.json();
      this.observability?.incrementCounter("s3.read_json.total", 1, {
        outcome: "success",
      });
      this.observability?.observeDuration(
        "s3.read_json.duration_ms",
        Date.now() - startedAt,
        { outcome: "success" },
      );
      return payload;
    } catch (error) {
      this.observability?.incrementCounter("s3.read_json.total", 1, {
        outcome: "error",
      });
      this.observability?.observeDuration(
        "s3.read_json.duration_ms",
        Date.now() - startedAt,
        { outcome: "error" },
      );
      this.logger?.error("S3 JSON read failed", {
        key,
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  }

  async readBinaryObject(key: string): Promise<Uint8Array> {
    const startedAt = Date.now();
    const file = this.client.file(key);
    try {
      const buffer = await file.arrayBuffer();
      this.observability?.incrementCounter("s3.read_binary.total", 1, {
        outcome: "success",
      });
      this.observability?.observeDuration(
        "s3.read_binary.duration_ms",
        Date.now() - startedAt,
        { outcome: "success" },
      );
      return new Uint8Array(buffer);
    } catch (error) {
      this.observability?.incrementCounter("s3.read_binary.total", 1, {
        outcome: "error",
      });
      this.observability?.observeDuration(
        "s3.read_binary.duration_ms",
        Date.now() - startedAt,
        { outcome: "error" },
      );
      throw error;
    }
  }
}
