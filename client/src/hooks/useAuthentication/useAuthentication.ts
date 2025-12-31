import {
  ApiEndpoints,
  type AuthenticateOperationInputDto,
  type CreateAccountOperationInputDto,
} from "@api";
import { useStoreAuthentication } from "@store";
import { useCallback } from "react";

export const useAuthentication = () => {
  const token = useStoreAuthentication((state) => state.token);
  const setAuthenticationStoreState = useStoreAuthentication(
    (state) => state.setAuthenticationStoreState
  );
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
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
          isAuthenticated: false,
        });

        return res;
      }
      setAuthenticationStoreState({
        token: res.data?.token || "",
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
          token: undefined,
          isAuthenticated: false,
        });

        return res;
      }
      setAuthenticationStoreState({
        token: res.data?.token || "",
        isAuthenticated: true,
      });

      return res;
    },
    [fetchAuthenticate, setAuthenticationStoreState]
  );

  const refreshToken = useCallback(async () => {
    const res = await fetchRefreshAuthentication();

    if (!res.metadata?.success) {
      setAuthenticationStoreState({ token: undefined, isAuthenticated: false });

      return {
        success: false,
      };
    }
    setAuthenticationStoreState({
      token: res.data?.token || "",
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
    isAuthenticated,
    createAccount,
    authenticate,
    isTokenExpired,
    refreshToken,
  };
};
