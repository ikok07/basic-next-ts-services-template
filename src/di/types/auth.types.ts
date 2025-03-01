import { IIdentityProviderService } from "../../application/services/identity-provider.interface.ts";
import { IGetAccessTokenUseCase } from "../../application/use-cases/auth/get-access-token.use-case.ts";
import { IGetAuthUrlUseCase } from "../../application/use-cases/auth/get-auth-url.use-case.ts";
import { IGetUserUseCase } from "../../application/use-cases/auth/get-user.use-case.ts";
import { IRefreshAccessTokenUseCase } from "../../application/use-cases/auth/refresh-access-token.use-case.ts";

export const AUTH_SYMBOLS = {
  IIdentityProviderService: Symbol.for("IIdentityProviderService"),
  IGetAuthUrlUseCase: Symbol.for("IGetAuthUrlUseCase"),
  IGetAccessTokenUseCase: Symbol.for("IGetAccessTokenUseCase"),
  IRefreshAccessTokenUseCase: Symbol.for("IRefreshAccessTokenUseCase"),
  IGetUserUseCase: Symbol.for("IGetUserUseCase"),
};

export interface AUTH_RETURN_TYPES {
  IIdentityProviderService: IIdentityProviderService;
  IGetAuthUrlUseCase: IGetAuthUrlUseCase;
  IGetAccessTokenUseCase: IGetAccessTokenUseCase;
  IRefreshAccessTokenUseCase: IRefreshAccessTokenUseCase;
  IGetUserUseCase: IGetUserUseCase;
}
