import { Elysia, t } from "elysia";

import { ObservabilityStore } from "@/infra/observability";
import { TenderOptionUpsertService } from "@/usecases/run-upsert";

export function createObservabilityRoutes(
  observability: ObservabilityStore,
  service: TenderOptionUpsertService,
) {
  return new Elysia({ prefix: "/observability" })
    .get("/", () =>
      observability.getSnapshot({
        upsertRuntime: service.getRuntimeSnapshot(),
      }),
    )
    .get("/metrics", () => observability.getMetricsSnapshot())
    .get(
      "/events",
      ({ query }) => observability.getRecentEvents(query.limit ?? 200),
      {
        query: t.Object({
          limit: t.Optional(t.Numeric({ minimum: 1, maximum: 5000 })),
        }),
      },
    )
    .get(
      "/runs/:runId",
      async ({ params, set }) => {
        const report = await service.getRun(params.runId);
        if (!report) {
          set.status = 404;
          return {
            message: "Run not found",
          };
        }

        return {
          report,
          events: await observability.getRunEvents(params.runId, 1000),
          runtime: service.getRuntimeSnapshot(),
          metrics: observability.getMetricsSnapshot(),
        };
      },
      {
        params: t.Object({
          runId: t.String(),
        }),
      },
    )
    .get(
      "/runs/:runId/events",
      async ({ params, query }) =>
        observability.getRunEvents(params.runId, query.limit ?? 1000),
      {
        params: t.Object({
          runId: t.String(),
        }),
        query: t.Object({
          limit: t.Optional(t.Numeric({ minimum: 1, maximum: 5000 })),
        }),
      },
    );
}
