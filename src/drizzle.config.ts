import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema/*",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: Deno.env.get("DB_URL")!,
  },
});
