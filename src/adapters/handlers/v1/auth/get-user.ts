import { Context, Next } from "hono";

export async function getUserHandler(c: Context, next: Next) {
  return c.json({
    status: "success",
    data: c.get("user"),
  });
}
