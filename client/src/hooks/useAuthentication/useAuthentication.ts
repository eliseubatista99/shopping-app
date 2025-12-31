import {
  ApiEndpoints,
  type AuthenticateOperationInputDto,
  type CreateAccountOperationInputDto,
} from "@api";
import { AppHelper } from "@helpers";
import { useStoreAuthentication } from "@store";
import { useCallback } from "react";

export const useAuthentication = () => {
  const refreshToken = useStoreAuthentication((state) => state.refreshToken);
  const setAuthenticationStoreState = useStoreAuthentication(
    (state) => state.setAuthenticationStoreState
  );
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );

  const { fetchCreateAccount } = ApiEndpoints.CreateAccount();
  const { fetchAuthenticate } = ApiEndpoints.Authenticate();
  const { fetchRefreshAuthentication } = ApiEndpoints.RefreshAuthentication();

  const token = AppHelper.getToken();

  const createAccount = useCallback(
    async (input: CreateAccountOperationInputDto) => {
      const res = await fetchCreateAccount({
        ...input,
      });

      if (!res.metadata?.success) {
        setAuthenticationStoreState({
          refreshToken: undefined,
          isAuthenticated: false,
        });
        AppHelper.setToken(undefined);

        return res;
      }

      AppHelper.setToken(res.data?.token);
      setAuthenticationStoreState({
        refreshToken: res.data?.refreshToken || "",
        isAuthenticated: true,
      });

      return res;
    },
    [fetchCreateAccount, setAuthenticationStoreState]
  );

  const authenticate = useCallback(
    async (input: AuthenticateOperationInputDto) => {
      const res = await fetchAuthenticate({
        ...input,
      });

      if (!res.metadata?.success) {
        setAuthenticationStoreState({
          refreshToken: undefined,
          isAuthenticated: false,
        });
        AppHelper.setToken(undefined);

        return res;
      }

      AppHelper.setToken(res.data?.token);
      setAuthenticationStoreState({
        refreshToken: res.data?.refreshToken || "",
        isAuthenticated: true,
      });

      return res;
    },
    [fetchAuthenticate, setAuthenticationStoreState]
  );

  const handleRefreshToken = useCallback(async () => {
    const res = await fetchRefreshAuthentication({
      refreshToken: refreshToken || "",
    });

    if (!res.metadata?.success) {
      setAuthenticationStoreState({
        refreshToken: undefined,
        isAuthenticated: false,
      });
      AppHelper.setToken(undefined);

      return {
        success: false,
      };
    }

    AppHelper.setToken(res.data?.token);
    setAuthenticationStoreState({
      refreshToken: res.data?.refreshToken || "",
      isAuthenticated: true,
    });

    return {
      success: true,
    };
  }, [fetchRefreshAuthentication, refreshToken, setAuthenticationStoreState]);

  const isTokenExpired = useCallback(() => {
    try {
      const splitToken = (token || "").split(".");

      if (splitToken.length < 2) {
        return true;
      }

      const payload = Number(JSON.parse(atob(splitToken[1])).exp || 0);

      const now = Date.now() / 1000;

      return payload < now;
    } catch (e) {
      console.error("Error checking token expiration >", { error: e });

      return true;
    }
  }, [token]);

  return {
    isAuthenticated,
    createAccount,
    authenticate,
    isTokenExpired,
    refreshToken: handleRefreshToken,
  };
};
