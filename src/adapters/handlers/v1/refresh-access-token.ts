import { Context, Next } from "hono";
import { z } from "zod";
import { ApiError } from "../../../entities/models/errors/ApiError.ts";
import { getInjection } from "../../../di/container.ts";

const refreshAccessToken = z.object({
  refreshToken: z.string(),
});

export async function refreshAccessTokenHandler(c: Context, next: Next) {
  const { data, error } = refreshAccessToken.safeParse(await c.req.json());
  if (error) throw new ApiError("Invalid body!", 400);

  const refreshAccessTokenUseCase = getInjection("IRefreshAccessTokenUseCase");
  const tokens = await refreshAccessTokenUseCase(data);

  return c.json({
    status: "success",
    data: tokens,
  });
}
