import { Elysia, t } from "elysia";

import { TenderOptionUpsertService } from "@/usecases/run-upsert";

export function createUpsertRoutes(service: TenderOptionUpsertService) {
  return new Elysia({ prefix: "/upserts/tender-options" })
    .post(
      "/run",
      async ({ body, set }) => {
        const result = await service.queueRun(body ?? {});
        set.status = 202;

        return {
          runId: result.runId,
          accepted: true,
          mode: result.mode,
        };
      },
      {
        body: t.Optional(
          t.Object({
            dryRun: t.Optional(t.Boolean()),
            prefix: t.Optional(t.String()),
            limit: t.Optional(t.Number({ minimum: 1 })),
            startAfter: t.Optional(t.String()),
            concurrency: t.Optional(t.Number({ minimum: 1 })),
            fileConcurrency: t.Optional(t.Number({ minimum: 1 })),
            resumeFromCheckpoint: t.Optional(t.Boolean()),
          })
        ),
      }
    )
    .get(
      "/runs",
      ({ query }) => service.listRecentRuns(query.limit ?? 25),
      {
        query: t.Object({
          limit: t.Optional(t.Numeric({ minimum: 1, maximum: 200 })),
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

        return report;
      },
      {
        params: t.Object({
          runId: t.String(),
        }),
      }
    );
}
