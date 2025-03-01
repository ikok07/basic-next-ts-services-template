import { Context, Next } from "hono";
import { getInjection } from "../../../../di/container.ts";
import { z } from "zod";
import { ApiError } from "../../../../entities/models/errors/ApiError.ts";

export async function loginHandler(c: Context, next: Next) {
    const redirectUrl = c.req.query("redirectUrl");
    const codeChallenge = c.req.query("codeChallenge")
    if (!redirectUrl) throw new ApiError("Invalid redirect url!", 400);
    if (!codeChallenge) throw new ApiError("Invalid code challenge!", 400);

    const getAuthUrlUseCase = getInjection("IGetAuthUrlUseCase");
    const authUrl = await getAuthUrlUseCase({
        redirectUrl,
        codeChallenge,
        locale: "en",
    });

    return c.redirect(authUrl);
}
