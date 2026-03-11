import type { TelemetryEvent } from "@/infra/observability";
import type { AuditRunSummary } from "@/infra/sqlite-audit-store";
import type {
  AppliedRunOptions,
  RunCheckpoint,
  RunItemOutcome,
  RunReport,
  RunStatus,
  RunTotals,
} from "@/types/upsert";

export interface RunListEntry {
  runId: string;
  status: RunStatus;
  mode: RunReport["mode"];
  createdAt: string;
  startedAt?: string;
  finishedAt?: string;
  options: AppliedRunOptions;
  totals: RunTotals;
  checkpoint: RunCheckpoint;
  itemCount: number;
  error?: string;
}

export interface RunSnapshot {
  report: RunReport;
  events: TelemetryEvent[];
  runtime: {
    activeRunIds: string[];
    activeRunCount: number;
    pendingUpdateChains: number;
  };
  metrics: ReturnType<import("@/infra/observability").ObservabilityStore["getMetricsSnapshot"]>;
  audit: AuditRunSummary;
}

export type RunStreamEvent =
  | {
      type: "snapshot";
      payload: RunSnapshot;
    }
  | {
      type: "run-status";
      payload: {
        report: RunReport;
      };
    }
  | {
      type: "item-recorded";
      payload: {
        item: RunItemOutcome;
        totals: RunTotals;
        checkpoint: RunCheckpoint;
        status: RunStatus;
      };
    }
  | {
      type: "telemetry";
      payload: TelemetryEvent;
    }
  | {
      type: "heartbeat";
      payload: {
        timestamp: string;
      };
    }
  | {
      type: "terminal";
      payload: {
        runId: string;
        status: Extract<RunStatus, "completed" | "failed" | "cancelled">;
      };
    };
