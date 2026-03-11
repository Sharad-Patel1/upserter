import { Elysia } from "elysia";

interface HealthOptions {
  version: string;
  s3Configured: boolean;
  clickhomeConfigured: boolean;
}

export function createHealthRoutes(options: HealthOptions) {
  // Keep route factory inferred to avoid strict generic mismatch with Elysia plugins.
  return new Elysia().get("/health", () => ({
    ok: true,
    s3Configured: options.s3Configured,
    clickhomeConfigured: options.clickhomeConfigured,
    version: options.version,
  }));
}
