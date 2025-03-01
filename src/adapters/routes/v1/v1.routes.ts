import {Hono} from "hono";
import authRoutes from "./auth/auth.routes.ts";

const v1Routes = new Hono();

v1Routes.route("/auth", authRoutes);

export default v1Routes;
