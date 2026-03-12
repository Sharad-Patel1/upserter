import { defineConfig } from "drizzle-kit";

const out = process.env.UPSERT_AUTH_MIGRATIONS_DIR ?? "./src/infra/auth/migrations";
const schema = process.env.UPSERT_AUTH_SCHEMA_PATH ?? "./src/infra/auth/schema.ts";

export default defineConfig({
  dialect: "sqlite",
  schema,
  out,
  dbCredentials: {
    url: process.env.UPSERT_AUTH_DB_PATH ?? "./.state/auth/better-auth.sqlite",
  },
});
