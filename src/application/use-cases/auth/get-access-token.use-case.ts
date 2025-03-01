import { z } from "zod";
import { getAccessTokenScheme, IIdentityProviderService } from "../../services/identity-provider.interface.ts";

export type IGetAccessTokenUseCase = ReturnType<typeof getAccessTokenUseCase>;

export const getAccessTokenUseCase = (
    identityProviderService: IIdentityProviderService
) => (opts: z.infer<typeof getAccessTokenScheme>) => {
    return identityProviderService.getAccessToken(opts);
}