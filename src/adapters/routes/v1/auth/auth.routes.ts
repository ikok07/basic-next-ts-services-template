import { Hono } from "hono";
import { loginHandler } from "../../../handlers/v1/auth/login.ts";
import { catchErrorsHandler } from "../../../utils/catchErrorsHandler.ts";
import { loginGetTokenHandler } from "../../../handlers/v1/auth/get-access-token.ts";
import { refreshAccessTokenHandler } from "../../../handlers/v1/refresh-access-token.ts";
import { getUserHandler } from "../../../handlers/v1/auth/get-user.ts";
import { protect } from "../../../middlewares/protect.ts";

const authRoutes = new Hono();

authRoutes.get("/login", catchErrorsHandler(loginHandler));

authRoutes.post("/token", catchErrorsHandler(refreshAccessTokenHandler));
authRoutes.post("/login/token", catchErrorsHandler(loginGetTokenHandler));

authRoutes.use(catchErrorsHandler(protect));
authRoutes.get("/user", catchErrorsHandler(getUserHandler));

export default authRoutes;
