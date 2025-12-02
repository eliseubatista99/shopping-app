import { Api } from "@api";
import { useStoreAuthentication } from "@store";
import { useCallback } from "react";
import type { AuthenticateInputDto } from "src/api/endpoints/useFetchAuthenticate";
import type { CreateAccountInputDto } from "src/api/endpoints/useFetchCreateAccount";
import type { IsExistingAccountInputDto } from "src/api/endpoints/useFetchIsExistingAccount";

export const useAuthentication = () => {
  const token = useStoreAuthentication((state) => state.token);
  const setAuthenticationStoreState = useStoreAuthentication(
    (state) => state.setAuthenticationStoreState
  );
  const { fetchIsExistingAccount } = Api.IsExistingAccount();
  const { fetchCreateAccount } = Api.CreateAccount();
  const { fetchAuthenticate } = Api.Authenticate();
  const { fetchRefreshAuthentication } = Api.RefreshAuthentication();

  const createAccount = useCallback(
    async (input: CreateAccountInputDto) => {
      const res = await fetchCreateAccount({
        ...input,
      });

      if (!res.metadata.success) {
        setAuthenticationStoreState({
          token: undefined,
          isAuthenticated: false,
        });

        return {
          success: false,
        };
      }
      setAuthenticationStoreState({
        token: res.data.token,
        isAuthenticated: true,
      });

      return {
        success: true,
      };
    },
    [fetchCreateAccount, setAuthenticationStoreState]
  );

  const authenticate = useCallback(
    async (input: AuthenticateInputDto) => {
      const res = await fetchAuthenticate({
        ...input,
      });

      if (!res.metadata.success) {
        setAuthenticationStoreState({
          token: undefined,
          isAuthenticated: false,
        });

        return {
          success: false,
        };
      }
      setAuthenticationStoreState({
        token: res.data.token,
        isAuthenticated: true,
      });

      return {
        success: true,
      };
    },
    [fetchAuthenticate, setAuthenticationStoreState]
  );

  const isExistingAccount = useCallback(
    async (input: IsExistingAccountInputDto) => {
      const res = await fetchIsExistingAccount({
        ...input,
      });

      return res.data?.exists || false;
    },
    [fetchIsExistingAccount]
  );

  const refreshToken = useCallback(async () => {
    const res = await fetchRefreshAuthentication();

    if (!res.metadata.success) {
      setAuthenticationStoreState({ token: undefined, isAuthenticated: false });

      return {
        success: false,
      };
    }
    setAuthenticationStoreState({
      token: res.data.token,
      isAuthenticated: true,
    });

    return {
      success: true,
    };
  }, [fetchRefreshAuthentication, setAuthenticationStoreState]);

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
    token,
    isExistingAccount,
    createAccount,
    authenticate,
    isTokenExpired,
    refreshToken,
  };
};
