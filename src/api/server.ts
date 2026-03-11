import { Elysia } from "elysia";

import appPackage from "../../package.json";
import { getEnv } from "@/config/env";
import { createHealthRoutes } from "@/api/routes/health.routes";
import { createUpsertRoutes } from "@/api/routes/upsert.routes";
import { ClickHomeClient } from "@/infra/clickhome-client";
import { createChildLogger, logger } from "@/infra/logger";
import { RunStore } from "@/infra/run-store";
import { S3Source } from "@/infra/s3-source";
import { TenderOptionUpsertService } from "@/usecases/run-upsert";

export function createApplication() {
  const env = getEnv();
  const clickhomeLogger = createChildLogger("clickhome-client");

  const source = new S3Source({
    bucket: env.S3_BUCKET,
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  });

  const clickhomeClient = new ClickHomeClient({
    baseUrl: env.CLICKHOME_API_BASE_URL,
    apiKey: env.CLICKHOME_API_KEY,
    logger: clickhomeLogger,
  });

  const runStore = new RunStore();

  const upsertService = new TenderOptionUpsertService({
    env,
    source,
    client: clickhomeClient,
    runStore,
    logger,
  });

  const app = new Elysia()
    .use(
      createHealthRoutes({
        version: appPackage.version,
        s3Configured: Boolean(
          env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY && env.S3_BUCKET
        ),
        clickhomeConfigured: Boolean(
          env.CLICKHOME_API_BASE_URL && env.CLICKHOME_API_KEY
        ),
      })
    )
    .use(createUpsertRoutes(upsertService));

  return {
    app,
    upsertService,
  };
}
