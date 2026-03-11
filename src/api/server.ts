import { Elysia } from "elysia";

import appPackage from "../../package.json";
import { createObservabilityRoutes } from "@/api/routes/observability.routes";
import { getEnv } from "@/config/env";
import { createHealthRoutes } from "@/api/routes/health.routes";
import { createUpsertRoutes } from "@/api/routes/upsert.routes";
import { ClickHomeClient } from "@/infra/clickhome-client";
import { ObservabilityStore } from "@/infra/observability";
import { createChildLogger, logger } from "@/infra/logger";
import { RunStore } from "@/infra/run-store";
import { S3Source } from "@/infra/s3-source";
import { SqliteAuditStore } from "@/infra/sqlite-audit-store";
import { TenderOptionUpsertService } from "@/usecases/run-upsert";
import type { AppEnv } from "@/config/env";
import type { Logger, TenderOptionUpsertClient, TenderOptionUpsertSource } from "@/types/upsert";

interface ApplicationDependencies {
  env?: AppEnv;
  source?: TenderOptionUpsertSource;
  client?: TenderOptionUpsertClient;
  runStore?: RunStore;
  observability?: ObservabilityStore;
  auditStore?: SqliteAuditStore;
  logger?: Logger;
}

export function createApplication(dependencies: ApplicationDependencies = {}) {
  const env = dependencies.env ?? getEnv();
  const appLogger = dependencies.logger ?? logger;
  const clickhomeLogger = createChildLogger("clickhome-client");
  const observability =
    dependencies.observability ?? new ObservabilityStore();
  const auditStore =
    dependencies.auditStore ??
    new SqliteAuditStore({
      databasePath: env.UPSERT_AUDIT_DB_PATH,
    });

  const source =
    dependencies.source ??
    new S3Source({
      bucket: env.S3_BUCKET,
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      observability,
    });

  const clickhomeClient =
    dependencies.client ??
    new ClickHomeClient({
      baseUrl: env.CLICKHOME_API_BASE_URL,
      apiKey: env.CLICKHOME_API_KEY,
      logger: clickhomeLogger,
      observability,
      auditStore,
    });

  const runStore =
    dependencies.runStore ??
    new RunStore({
      observability,
      auditStore,
    });

  const upsertService = new TenderOptionUpsertService({
    env,
    source,
    client: clickhomeClient,
    runStore,
    logger: appLogger,
    observability,
    auditStore,
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
    .use(createUpsertRoutes(upsertService))
    .use(createObservabilityRoutes(observability, auditStore, upsertService));

  return {
    app,
    upsertService,
    observability,
    auditStore,
  };
}
