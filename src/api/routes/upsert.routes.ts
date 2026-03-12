import { Elysia, t } from "elysia";

import { createAuth } from "@/infra/auth/auth";
import { TenderOptionUpsertService } from "@/usecases/run-upsert";

async function ensureAuthenticated(
  auth: ReturnType<typeof createAuth>["auth"],
  request: Request,
  set: { status?: number | string },
) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    set.status = 401;
    return {
      message: "Unauthorized",
    };
  }

  return session;
}

export function createUpsertRoutes(
  service: TenderOptionUpsertService,
  auth: ReturnType<typeof createAuth>["auth"],
) {
  return new Elysia({ prefix: "/upserts/tender-options" })
    .post(
      "/run",
      async ({ body, request, set }) => {
        const session = await ensureAuthenticated(auth, request, set);
        if (!session || "message" in session) {
          return session;
        }

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
      async ({ query, request, set }) => {
        const session = await ensureAuthenticated(auth, request, set);
        if (!session || "message" in session) {
          return session;
        }

        return service.listRecentRuns(query.limit ?? 25);
      },
      {
        query: t.Object({
          limit: t.Optional(t.Numeric({ minimum: 1, maximum: 200 })),
        }),
      },
    )
    .get(
      "/runs/:runId",
      async ({ params, request, set }) => {
        const session = await ensureAuthenticated(auth, request, set);
        if (!session || "message" in session) {
          return session;
        }

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
