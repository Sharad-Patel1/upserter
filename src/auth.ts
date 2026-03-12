import { getEnv } from "@/config/env";
import { createAuth } from "@/infra/auth/auth";

export const { auth } = createAuth({
  env: getEnv(),
});
