import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

import { ObservabilityStore } from "@/infra/observability";
import type { RunReport } from "@/types/upsert";

export interface RunStoreOptions {
  baseDirectory?: string;
  observability?: ObservabilityStore;
}

interface CheckpointCandidate {
  runId: string;
  lastProcessedKey: string;
  updatedAt: string;
}

export class RunStore {
  private readonly baseDirectory: string;
  private readonly observability: ObservabilityStore | null;

  constructor(options: RunStoreOptions = {}) {
    this.baseDirectory = options.baseDirectory ?? join(process.cwd(), ".state", "upserts");
    this.observability = options.observability ?? null;
  }

  async createRun(report: RunReport): Promise<void> {
    const startedAt = Date.now();
    await this.ensureBaseDirectory();
    await this.writeRun(report);
    this.observability?.incrementCounter("run_store.create.total");
    this.observability?.observeDuration("run_store.create.duration_ms", Date.now() - startedAt);
    this.observability?.recordEvent({
      level: "info",
      component: "run-store",
      event: "run_store.create",
      runId: report.runId,
      message: "Persisted run report",
      data: {
        status: report.status,
        mode: report.mode,
      },
    });
  }

  async getRun(runId: string): Promise<RunReport | undefined> {
    const startedAt = Date.now();
    const path = this.getRunPath(runId);
    try {
      const data = await readFile(path, "utf8");
      const report = JSON.parse(data) as RunReport;
      this.observability?.incrementCounter("run_store.get.total", 1, {
        hit: true,
      });
      this.observability?.observeDuration("run_store.get.duration_ms", Date.now() - startedAt, {
        hit: true,
      });
      return report;
    } catch {
      this.observability?.incrementCounter("run_store.get.total", 1, {
        hit: false,
      });
      this.observability?.observeDuration("run_store.get.duration_ms", Date.now() - startedAt, {
        hit: false,
      });
      return undefined;
    }
  }

  async updateRun(
    runId: string,
    updater: (report: RunReport) => RunReport
  ): Promise<RunReport> {
    const startedAt = Date.now();
    const existing = await this.getRun(runId);
    if (!existing) {
      throw new Error(`Run ${runId} not found`);
    }

    const updated = updater(existing);
    await this.writeRun(updated);
    this.observability?.incrementCounter("run_store.update.total");
    this.observability?.observeDuration("run_store.update.duration_ms", Date.now() - startedAt);
    return updated;
  }

  async getLatestCheckpoint(): Promise<CheckpointCandidate | undefined> {
    const startedAt = Date.now();
    await this.ensureBaseDirectory();

    const files = await readdir(this.baseDirectory);
    const reports: Array<{ report: RunReport; modifiedMs: number }> = [];

    for (const fileName of files) {
      if (!fileName.endsWith(".json")) {
        continue;
      }

      const fullPath = join(this.baseDirectory, fileName);
      const stats = await stat(fullPath);
      const runId = fileName.replace(/\.json$/, "");
      const report = await this.getRun(runId);
      if (!report) {
        continue;
      }

      reports.push({ report, modifiedMs: stats.mtimeMs });
    }

    reports.sort((left, right) => {
      const leftUpdated = Date.parse(left.report.checkpoint.updatedAt ?? "");
      const rightUpdated = Date.parse(right.report.checkpoint.updatedAt ?? "");

      if (Number.isFinite(leftUpdated) && Number.isFinite(rightUpdated)) {
        return rightUpdated - leftUpdated;
      }

      return right.modifiedMs - left.modifiedMs;
    });

    for (const { report } of reports) {
      if (!report.checkpoint.lastProcessedKey || !report.checkpoint.updatedAt) {
        continue;
      }

      if (report.status === "completed") {
        continue;
      }

      this.observability?.observeDuration(
        "run_store.latest_checkpoint.duration_ms",
        Date.now() - startedAt,
      );
      return {
        runId: report.runId,
        lastProcessedKey: report.checkpoint.lastProcessedKey,
        updatedAt: report.checkpoint.updatedAt,
      };
    }

    this.observability?.observeDuration(
      "run_store.latest_checkpoint.duration_ms",
      Date.now() - startedAt,
    );
    return undefined;
  }

  private getRunPath(runId: string): string {
    return join(this.baseDirectory, `${runId}.json`);
  }

  private async ensureBaseDirectory(): Promise<void> {
    await mkdir(this.baseDirectory, { recursive: true });
  }

  private async writeRun(report: RunReport): Promise<void> {
    const path = this.getRunPath(report.runId);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  }
}
