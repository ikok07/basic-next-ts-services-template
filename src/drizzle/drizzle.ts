import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(Deno.env.get("DB_URL")!);
