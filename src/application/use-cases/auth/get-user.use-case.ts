import { IIdentityProviderService } from "../../services/identity-provider.interface.ts";

export type IGetUserUseCase = ReturnType<typeof getUserUseCase>;

export const getUserUseCase =
  (identityProviderService: IIdentityProviderService) =>
  (accessToken: string) => {
    return identityProviderService.getUser(accessToken);
  };
