import { describe, expect, it } from "bun:test";

import { parseAppEnv } from "@/config/env";

describe("parseAppEnv", () => {
  it("supports alias keys and number coercion", () => {
    const parsed = parseAppEnv({
      AWS_ACCESS_KEY_ID: "key",
      AWS_SECRET_ACCESS_KEY: "secret",
      S3_BUCKET: "bucket",
      S3_PREFIX: "enriched/",
      CLICKHOME_BASE_URL: "https://example.com/API",
      CLICKHOME_KEY: "token",
      CLICKHOME_BUSINESS_UNIT_ID: "12",
      CLICKHOME_RESOURCE_CODE_ID: "34",
      BETTER_AUTH_SECRET: "12345678901234567890123456789012",
      BETTER_AUTH_URL: "https://console.example.com",
      UPSERT_AUDIT_DB_PATH: ".state/audit/custom.sqlite",
      UPSERT_AUTH_DB_PATH: ".state/auth/custom.sqlite",
      UPSERTER_WEB_ORIGIN: "https://ops.example.com",
    });

    expect(parsed.ENRICHED_DATA_PATH).toBe("enriched/");
    expect(parsed.CLICKHOME_API_BASE_URL).toBe("https://example.com/API");
    expect(parsed.CLICKHOME_API_KEY).toBe("token");
    expect(parsed.CLICKHOME_BUSINESS_UNIT_ID).toBe(12);
    expect(parsed.CLICKHOME_RESOURCE_CODE).toBe(34);
    expect(parsed.BETTER_AUTH_URL).toBe("https://console.example.com");
    expect(parsed.UPSERT_AUDIT_DB_PATH).toBe(".state/audit/custom.sqlite");
    expect(parsed.UPSERT_AUTH_DB_PATH).toBe(".state/auth/custom.sqlite");
    expect(parsed.UPSERTER_WEB_ORIGIN).toBe("https://ops.example.com");
  });

  it("throws a clear error when required fields are missing", () => {
    expect(() =>
      parseAppEnv({
        AWS_ACCESS_KEY_ID: "key",
      })
    ).toThrow("Invalid environment configuration");
  });
});
