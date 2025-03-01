import { createModule } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "../types.ts";
import { ZitadelProviderService } from "../../infrastructure/services/auth/zitadel-provider-service.ts";
import { getAuthUrlUseCase } from "../../application/use-cases/auth/get-auth-url.use-case.ts";
import { getAccessTokenUseCase } from "../../application/use-cases/auth/get-access-token.use-case.ts";
import { refreshAccessTokenUseCase } from "../../application/use-cases/auth/refresh-access-token.use-case.ts";
import { getUserUseCase } from "../../application/use-cases/auth/get-user.use-case.ts";

export function createAuthenticationModule() {
  const authModule = createModule();

  authModule
    .bind(DI_SYMBOLS.IIdentityProviderService)
    .toClass(ZitadelProviderService);

  authModule
    .bind(DI_SYMBOLS.IGetUserUseCase)
    .toHigherOrderFunction(getUserUseCase, [
      DI_SYMBOLS.IIdentityProviderService,
    ]);

  authModule
    .bind(DI_SYMBOLS.IGetAuthUrlUseCase)
    .toHigherOrderFunction(getAuthUrlUseCase, [
      DI_SYMBOLS.IIdentityProviderService,
    ]);

  authModule
    .bind(DI_SYMBOLS.IGetAccessTokenUseCase)
    .toHigherOrderFunction(getAccessTokenUseCase, [
      DI_SYMBOLS.IIdentityProviderService,
    ]);

  authModule
    .bind(DI_SYMBOLS.IRefreshAccessTokenUseCase)
    .toHigherOrderFunction(refreshAccessTokenUseCase, [
      DI_SYMBOLS.IIdentityProviderService,
    ]);

  return authModule;
}
