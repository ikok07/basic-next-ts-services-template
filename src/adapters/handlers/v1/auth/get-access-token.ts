import { Context, Next } from "hono";
import { getInjection } from "../../../../di/container.ts";
import { ApiError } from "../../../../entities/models/errors/ApiError.ts";
import { z } from "zod";

const getTokenSchema = z.object({
    code: z.string(),
    codeVerifier: z.string(),
    redirectUrl: z.string().url()
})

export async function loginGetTokenHandler(c: Context, next: Next) {
    const { data, error } = getTokenSchema.safeParse(await c.req.json());
    if (error)
        throw new ApiError(`Invalid body! ${error.message}`, 400);

    const getAccessTokenUseCase = getInjection("IGetAccessTokenUseCase");
    const { accessToken, refreshToken } = await getAccessTokenUseCase(data)

    return c.json({
        status: "success",
        data: {
            accessToken,
            refreshToken
        }
    });
}
