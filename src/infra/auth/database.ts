import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

import { Database } from "bun:sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { drizzle } from "drizzle-orm/bun-sqlite";

import * as schema from "@/infra/auth/schema";

export function resolveAuthDatabasePath(databasePath?: string) {
  return databasePath ?? join(process.cwd(), ".state", "auth", "better-auth.sqlite");
}

export function createAuthDatabase(databasePath?: string) {
  const resolvedPath = resolveAuthDatabasePath(databasePath);
  mkdirSync(dirname(resolvedPath), { recursive: true });

  const sqlite = new Database(resolvedPath, {
    create: true,
    strict: true,
  });
  sqlite.exec("PRAGMA foreign_keys = ON;");
  const db = drizzle(sqlite, { schema });
  migrate(db, {
    migrationsFolder: join(process.cwd(), "src", "infra", "auth", "migrations"),
  });

  return {
    databasePath: resolvedPath,
    sqlite,
    db,
  };
}
