import {
  ApiEndpoints,
  type AuthenticateOperationInputDto,
  type CreateAccountOperationInputDto,
} from "@api";
import { useStoreAuthentication } from "@store";
import { useCallback } from "react";

export const useAuthentication = () => {
  const refreshToken = useStoreAuthentication((state) => state.refreshToken);
  const setAuthenticationStoreState = useStoreAuthentication(
    (state) => state.setAuthenticationStoreState,
  );
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated,
  );
  const isTokenExpired = useStoreAuthentication(
    (state) => state.isTokenExpired,
  );

  const { fetchCreateAccount } = ApiEndpoints.CreateAccount();
  const { fetchAuthenticate } = ApiEndpoints.Authenticate();
  const { fetchRefreshAuthentication } = ApiEndpoints.RefreshAuthentication();

  const createAccount = useCallback(
    async (input: CreateAccountOperationInputDto) => {
      const res = await fetchCreateAccount({
        ...input,
      });

      if (!res.metadata?.success) {
        setAuthenticationStoreState({
          token: undefined,
          refreshToken: undefined,
          isAuthenticated: false,
        });

        return res;
      }

      setAuthenticationStoreState({
        token: res.data?.token || "",
        refreshToken: res.data?.refreshToken || "",
        isAuthenticated: true,
      });

      return res;
    },
    [fetchCreateAccount, setAuthenticationStoreState],
  );

  const authenticate = useCallback(
    async (input: AuthenticateOperationInputDto) => {
      const res = await fetchAuthenticate({
        ...input,
      });

      if (!res.metadata?.success) {
        setAuthenticationStoreState({
          token: undefined,
          refreshToken: undefined,
          isAuthenticated: false,
        });

        return res;
      }

      setAuthenticationStoreState({
        token: res.data?.token || "",
        refreshToken: res.data?.refreshToken || "",
        isAuthenticated: true,
      });

      return res;
    },
    [fetchAuthenticate, setAuthenticationStoreState],
  );

  const handleRefreshToken = useCallback(async () => {
    const res = await fetchRefreshAuthentication({
      refreshToken: refreshToken || "",
    });

    if (!res.metadata?.success) {
      setAuthenticationStoreState({
        token: undefined,
        refreshToken: undefined,
        isAuthenticated: false,
      });

      return {
        success: false,
      };
    }

    setAuthenticationStoreState({
      token: res.data?.token || "",
      refreshToken: res.data?.refreshToken || "",
      isAuthenticated: true,
    });

    return {
      success: true,
    };
  }, [fetchRefreshAuthentication, refreshToken, setAuthenticationStoreState]);

  return {
    isAuthenticated,
    createAccount,
    authenticate,
    refreshToken: handleRefreshToken,
    isTokenExpired: () => isTokenExpired(),
  };
};
