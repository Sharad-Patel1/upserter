import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";

import { createAuthDatabase } from "@/infra/auth/database";
import type { AppEnv } from "@/config/env";

interface AuthDependencies {
  env: AppEnv;
}

export function createAuth(dependencies: AuthDependencies) {
  const { env } = dependencies;
  const authDatabase = createAuthDatabase(env.UPSERT_AUTH_DB_PATH);

  const auth = betterAuth({
    appName: "Upserter",
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET,
    trustedOrigins: [
      env.BETTER_AUTH_URL,
      "https://upserter-web-production.up.railway.app",
      "http://localhost:3001",
    ],
    database: drizzleAdapter(authDatabase.db, {
      provider: "sqlite",
    }),
    emailAndPassword: {
      enabled: true,
      disableSignUp: true,
    },
    plugins: [
      admin({
        defaultRole: "user",
        adminRoles: ["admin"],
      }),
    ],
  });

  return {
    auth,
    authDatabasePath: authDatabase.databasePath,
    authDb: authDatabase.db,
    authSqlite: authDatabase.sqlite,
  };
}
