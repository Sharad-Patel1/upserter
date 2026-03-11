import { createApplication } from "@/api/server";

const { app } = createApplication();

const portRaw = Bun.env.PORT;
const port =
  typeof portRaw === "string" && portRaw.trim().length > 0
    ? Number(portRaw)
    : 3000;

if (!Number.isFinite(port) || port <= 0) {
  throw new Error("PORT must be a positive number");
}

app.listen(port);

console.log(`Upserter API listening on http://localhost:${port}`);
