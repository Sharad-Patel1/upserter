import { appendFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";

type MetricTags = Record<string, string | number | boolean | undefined>;
type TelemetryLevel = "debug" | "info" | "warn" | "error";

interface CounterMetric {
  name: string;
  tags: Record<string, string>;
  value: number;
  updatedAt: string;
}

interface GaugeMetric {
  name: string;
  tags: Record<string, string>;
  value: number;
  updatedAt: string;
}

interface TimingMetric {
  name: string;
  tags: Record<string, string>;
  count: number;
  totalMs: number;
  minMs: number;
  maxMs: number;
  lastMs: number;
  avgMs: number;
  updatedAt: string;
}

export interface TelemetryEvent {
  id: string;
  timestamp: string;
  level: TelemetryLevel;
  component: string;
  event: string;
  traceId?: string;
  requestId?: string;
  runId?: string;
  itemKey?: string;
  externalRef?: string;
  optionId?: number;
  message?: string;
  durationMs?: number;
  data?: Record<string, unknown>;
}

export interface ObservabilityStoreOptions {
  baseDirectory?: string;
  recentEventsLimit?: number;
  now?: () => Date;
  uuid?: () => string;
}

function normalizeTagValue(value: string | number | boolean | undefined): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value === "string") {
    const normalized = value.trim();
    return normalized.length > 0 ? normalized : undefined;
  }

  return String(value);
}

function normalizeTags(tags: MetricTags | undefined): Record<string, string> {
  if (!tags) {
    return {};
  }

  const normalized: Record<string, string> = {};
  const entries = Object.entries(tags).sort(([left], [right]) =>
    left.localeCompare(right),
  );

  for (const [key, rawValue] of entries) {
    const value = normalizeTagValue(rawValue);
    if (value !== undefined) {
      normalized[key] = value;
    }
  }

  return normalized;
}

function metricKey(name: string, tags: Record<string, string>): string {
  return `${name}|${JSON.stringify(tags)}`;
}

function sanitizePathSegment(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export class ObservabilityStore {
  private readonly baseDirectory: string;
  private readonly recentEventsLimit: number;
  private readonly now: () => Date;
  private readonly uuid: () => string;
  private readonly recentEvents: TelemetryEvent[] = [];
  private readonly counters = new Map<string, CounterMetric>();
  private readonly gauges = new Map<string, GaugeMetric>();
  private readonly timings = new Map<string, TimingMetric>();
  private readonly writeChains = new Map<string, Promise<void>>();
  private readonly subscribers = new Set<(event: TelemetryEvent) => void>();

  constructor(options: ObservabilityStoreOptions = {}) {
    this.baseDirectory =
      options.baseDirectory ?? join(process.cwd(), ".state", "observability");
    this.recentEventsLimit = Math.max(100, options.recentEventsLimit ?? 2000);
    this.now = options.now ?? (() => new Date());
    this.uuid = options.uuid ?? (() => crypto.randomUUID());
  }

  incrementCounter(name: string, value = 1, tags?: MetricTags): void {
    const normalizedTags = normalizeTags(tags);
    const key = metricKey(name, normalizedTags);
    const existing = this.counters.get(key);
    const updatedAt = this.now().toISOString();

    this.counters.set(key, {
      name,
      tags: normalizedTags,
      value: (existing?.value ?? 0) + value,
      updatedAt,
    });
  }

  setGauge(name: string, value: number, tags?: MetricTags): void {
    const normalizedTags = normalizeTags(tags);
    const key = metricKey(name, normalizedTags);

    this.gauges.set(key, {
      name,
      tags: normalizedTags,
      value,
      updatedAt: this.now().toISOString(),
    });
  }

  observeDuration(name: string, durationMs: number, tags?: MetricTags): void {
    const normalizedTags = normalizeTags(tags);
    const key = metricKey(name, normalizedTags);
    const existing = this.timings.get(key);
    const count = (existing?.count ?? 0) + 1;
    const totalMs = (existing?.totalMs ?? 0) + durationMs;
    const minMs = existing ? Math.min(existing.minMs, durationMs) : durationMs;
    const maxMs = existing ? Math.max(existing.maxMs, durationMs) : durationMs;

    this.timings.set(key, {
      name,
      tags: normalizedTags,
      count,
      totalMs,
      minMs,
      maxMs,
      lastMs: durationMs,
      avgMs: totalMs / count,
      updatedAt: this.now().toISOString(),
    });
  }

  recordEvent(input: Omit<TelemetryEvent, "id" | "timestamp">): TelemetryEvent {
    const event: TelemetryEvent = {
      ...input,
      id: this.uuid(),
      timestamp: this.now().toISOString(),
    };

    this.recentEvents.push(event);
    if (this.recentEvents.length > this.recentEventsLimit) {
      this.recentEvents.splice(0, this.recentEvents.length - this.recentEventsLimit);
    }

    this.incrementCounter("telemetry.events.total", 1, {
      component: event.component,
      level: event.level,
      event: event.event,
    });

    this.enqueueAppend(join(this.baseDirectory, "events.ndjson"), event);
    for (const subscriber of this.subscribers) {
      subscriber(event);
    }

    if (event.runId) {
      this.enqueueAppend(
        join(
          this.baseDirectory,
          "runs",
          `${sanitizePathSegment(event.runId)}.ndjson`,
        ),
        event,
      );
    }

    return event;
  }

  subscribe(subscriber: (event: TelemetryEvent) => void): () => void {
    this.subscribers.add(subscriber);
    return () => {
      this.subscribers.delete(subscriber);
    };
  }

  getMetricsSnapshot(): {
    generatedAt: string;
    counters: CounterMetric[];
    gauges: GaugeMetric[];
    timings: TimingMetric[];
  } {
    return {
      generatedAt: this.now().toISOString(),
      counters: [...this.counters.values()].sort((left, right) =>
        left.name.localeCompare(right.name),
      ),
      gauges: [...this.gauges.values()].sort((left, right) =>
        left.name.localeCompare(right.name),
      ),
      timings: [...this.timings.values()].sort((left, right) =>
        left.name.localeCompare(right.name),
      ),
    };
  }

  getRecentEvents(limit = 100): TelemetryEvent[] {
    const normalizedLimit = Math.max(1, Math.floor(limit));
    return this.recentEvents.slice(-normalizedLimit);
  }

  async getRunEvents(runId: string, limit = 500): Promise<TelemetryEvent[]> {
    const normalizedLimit = Math.max(1, Math.floor(limit));
    const path = join(
      this.baseDirectory,
      "runs",
      `${sanitizePathSegment(runId)}.ndjson`,
    );

    try {
      const contents = await readFile(path, "utf8");
      const events = contents
        .split("\n")
        .filter((line) => line.trim().length > 0)
        .map((line) => JSON.parse(line) as TelemetryEvent);

      return events.slice(-normalizedLimit);
    } catch {
      return this.recentEvents
        .filter((event) => event.runId === runId)
        .slice(-normalizedLimit);
    }
  }

  getSnapshot(runtime: Record<string, unknown> = {}) {
    return {
      runtime,
      metrics: this.getMetricsSnapshot(),
      recentEvents: this.getRecentEvents(200),
    };
  }

  private enqueueAppend(path: string, value: unknown): void {
    const serialized = `${JSON.stringify(value)}\n`;
    const current = this.writeChains.get(path) ?? Promise.resolve();

    const next = current.then(async () => {
      await mkdir(dirname(path), { recursive: true });
      await appendFile(path, serialized, "utf8");
    });

    this.writeChains.set(
      path,
      next.catch(() => {
        // Keep future writes flowing even if one append fails.
      }),
    );
  }
}
