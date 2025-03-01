import {AUTH_RETURN_TYPES, AUTH_SYMBOLS} from "./types/auth.types.ts";

export const DI_SYMBOLS = Object.assign(
    {},
    AUTH_SYMBOLS
)

export interface DI_RETURN_TYPES extends
    AUTH_RETURN_TYPES
{}