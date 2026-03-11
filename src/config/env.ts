import { z } from "zod";

const ENV_ALIASES = {
  ENRICHED_DATA_PATH: ["ENRICHED_DATA_PATH", "S3_PREFIX"],
  CLICKHOME_API_BASE_URL: ["CLICKHOME_API_BASE_URL", "CLICKHOME_BASE_URL"],
  CLICKHOME_API_KEY: ["CLICKHOME_API_KEY", "CLICKHOME_KEY"],
  CLICKHOME_RESOURCE_CODE: ["CLICKHOME_RESOURCE_CODE", "CLICKHOME_RESOURCE_CODE_ID"],
} as const;

export interface AppEnv {
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  S3_BUCKET: string;
  ENRICHED_DATA_PATH: string;
  CLICKHOME_API_BASE_URL: string;
  CLICKHOME_API_KEY: string;
  CLICKHOME_BUSINESS_UNIT_ID: number;
  CLICKHOME_RESOURCE_CODE: number;
}

const envSchema = z.object({
  AWS_ACCESS_KEY_ID: z.string().min(1, "AWS_ACCESS_KEY_ID is required"),
  AWS_SECRET_ACCESS_KEY: z.string().min(1, "AWS_SECRET_ACCESS_KEY is required"),
  S3_BUCKET: z.string().min(1, "S3_BUCKET is required"),
  ENRICHED_DATA_PATH: z.string().min(1, "ENRICHED_DATA_PATH (or S3_PREFIX) is required"),
  CLICKHOME_API_BASE_URL: z.string().url("CLICKHOME_API_BASE_URL (or CLICKHOME_BASE_URL) must be a valid URL"),
  CLICKHOME_API_KEY: z.string().min(1, "CLICKHOME_API_KEY (or CLICKHOME_KEY) is required"),
  CLICKHOME_BUSINESS_UNIT_ID: z.coerce.number().int().nonnegative(),
  CLICKHOME_RESOURCE_CODE: z.coerce.number().int().nonnegative(),
});

function firstDefined(
  runtimeEnv: Record<string, string | undefined>,
  keys: readonly string[]
): string | undefined {
  for (const key of keys) {
    const value = runtimeEnv[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value;
    }
  }

  return undefined;
}

function buildRawEnv(runtimeEnv: Record<string, string | undefined>): Record<string, string | undefined> {
  return {
    AWS_ACCESS_KEY_ID: runtimeEnv.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: runtimeEnv.AWS_SECRET_ACCESS_KEY,
    S3_BUCKET: runtimeEnv.S3_BUCKET,
    ENRICHED_DATA_PATH:
      firstDefined(runtimeEnv, ENV_ALIASES.ENRICHED_DATA_PATH) ?? "enriched/",
    CLICKHOME_API_BASE_URL: firstDefined(runtimeEnv, ENV_ALIASES.CLICKHOME_API_BASE_URL),
    CLICKHOME_API_KEY: firstDefined(runtimeEnv, ENV_ALIASES.CLICKHOME_API_KEY),
    CLICKHOME_BUSINESS_UNIT_ID: runtimeEnv.CLICKHOME_BUSINESS_UNIT_ID,
    CLICKHOME_RESOURCE_CODE: firstDefined(runtimeEnv, ENV_ALIASES.CLICKHOME_RESOURCE_CODE),
  };
}

export function parseAppEnv(runtimeEnv: Record<string, string | undefined>): AppEnv {
  const raw = buildRawEnv(runtimeEnv);
  const parsed = envSchema.safeParse(raw);

  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => {
        const path = issue.path.join(".") || "root";
        return `${path}: ${issue.message}`;
      })
      .join("; ");

    throw new Error(`Invalid environment configuration. ${details}`);
  }

  return parsed.data;
}

let cachedEnv: AppEnv | undefined;

export function getEnv(): AppEnv {
  if (!cachedEnv) {
    cachedEnv = parseAppEnv(Bun.env);
  }

  return cachedEnv;
}
