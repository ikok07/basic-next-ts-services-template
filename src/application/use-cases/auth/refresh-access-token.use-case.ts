import { z } from "zod";
import {
  IIdentityProviderService,
  refreshAccesstokenScheme,
} from "../../services/identity-provider.interface.ts";

export type IRefreshAccessTokenUseCase = ReturnType<
  typeof refreshAccessTokenUseCase
>;

export const refreshAccessTokenUseCase =
  (identityProviderService: IIdentityProviderService) =>
  (opts: z.infer<typeof refreshAccesstokenScheme>) => {
    return identityProviderService.refreshAccessToken(opts);
  };
