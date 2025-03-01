import {getAuthURLScheme, IIdentityProviderService} from "../../services/identity-provider.interface.ts";
import {z} from "zod";

export type IGetAuthUrlUseCase = ReturnType<typeof getAuthUrlUseCase>;

export const getAuthUrlUseCase = (
    identityProviderService: IIdentityProviderService
) => (opts: z.infer<typeof getAuthURLScheme>) => {
    return identityProviderService.getAuthenticateURL(opts);
}