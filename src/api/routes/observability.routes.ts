import { Elysia, t } from "elysia";

import { ObservabilityStore } from "@/infra/observability";
import { SqliteAuditStore } from "@/infra/sqlite-audit-store";
import type { RunSnapshot, RunStreamEvent } from "@/types/api";
import { TenderOptionUpsertService } from "@/usecases/run-upsert";

async function buildRunSnapshot(
  runId: string,
  observability: ObservabilityStore,
  auditStore: SqliteAuditStore,
  service: TenderOptionUpsertService,
): Promise<RunSnapshot | undefined> {
  const report = await service.getRun(runId);
  if (!report) {
    return undefined;
  }

  return {
    report,
    events: await observability.getRunEvents(runId, 1000),
    runtime: service.getRuntimeSnapshot(),
    metrics: observability.getMetricsSnapshot(),
    audit: auditStore.getRunSummary(runId),
  };
}

function formatSseEvent(event: RunStreamEvent): string {
  return `event: ${event.type}\ndata: ${JSON.stringify(event.payload)}\n\n`;
}

export function createObservabilityRoutes(
  observability: ObservabilityStore,
  auditStore: SqliteAuditStore,
  service: TenderOptionUpsertService,
  webOrigin?: string,
) {
  return new Elysia({ prefix: "/observability" })
    .get("/", () =>
      observability.getSnapshot({
        upsertRuntime: service.getRuntimeSnapshot(),
        auditDatabasePath: auditStore.databasePath,
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
        const snapshot = await buildRunSnapshot(
          params.runId,
          observability,
          auditStore,
          service,
        );
        if (!snapshot) {
          set.status = 404;
          return {
            message: "Run not found",
          };
        }

        return snapshot;
      },
      {
        params: t.Object({
          runId: t.String(),
        }),
      },
    )
    .get(
      "/runs/:runId/stream",
      async ({ params, request, set }) => {
        const snapshot = await buildRunSnapshot(
          params.runId,
          observability,
          auditStore,
          service,
        );
        if (!snapshot) {
          set.status = 404;
          return {
            message: "Run not found",
          };
        }

        const encoder = new TextEncoder();
        const headers = new Headers({
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive",
          "Content-Type": "text/event-stream; charset=utf-8",
          "X-Accel-Buffering": "no",
        });

        if (webOrigin) {
          headers.set("Access-Control-Allow-Origin", webOrigin);
          headers.set("Vary", "Origin");
        }

        let cleanup = () => {};

        return new Response(
          new ReadableStream({
            cancel() {
              cleanup();
            },
            start(controller) {
              let closed = false;

              const send = (event: RunStreamEvent) => {
                if (closed) {
                  return;
                }

                controller.enqueue(encoder.encode(formatSseEvent(event)));
              };

              const cleanupAbort = () => {
                cleanup();
                if (!closed) {
                  closed = true;
                  controller.close();
                }
              };

              cleanup = (() => {
                const unsubscribeRun = service.subscribeToRun(params.runId, (event) => {
                  send(event);
                  if (event.type === "terminal") {
                    cleanupAbort();
                  }
                });
                const unsubscribeTelemetry = observability.subscribe((event) => {
                  if (event.runId !== params.runId) {
                    return;
                  }

                  send({
                    type: "telemetry",
                    payload: event,
                  });
                });
                const heartbeatTimer = setInterval(() => {
                  send({
                    type: "heartbeat",
                    payload: {
                      timestamp: new Date().toISOString(),
                    },
                  });
                }, 10_000);

                request.signal.addEventListener("abort", cleanupAbort, { once: true });

                return () => {
                  clearInterval(heartbeatTimer);
                  unsubscribeRun();
                  unsubscribeTelemetry();
                  request.signal.removeEventListener("abort", cleanupAbort);
                };
              })();

              send({
                type: "snapshot",
                payload: snapshot,
              });

              if (
                snapshot.report.status === "completed" ||
                snapshot.report.status === "failed" ||
                snapshot.report.status === "cancelled"
              ) {
                send({
                  type: "terminal",
                  payload: {
                    runId: snapshot.report.runId,
                    status: snapshot.report.status,
                  },
                });
                cleanupAbort();
              }
            },
          }),
          {
            headers,
          },
        );
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
    )
    .get(
      "/runs/:runId/items/:itemKey",
      ({ params }) => auditStore.getRunItemDetail(params.runId, params.itemKey),
      {
        params: t.Object({
          runId: t.String(),
          itemKey: t.String(),
        }),
      },
    );
}
