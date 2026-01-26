import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

type AuthForm = {
  email?: string;
  phone?: string;
};
export interface AuthenticationState {
  token?: string;
  refreshToken?: string;
  form?: AuthForm;
  isAuthenticated?: boolean;
}

const initialState: AuthenticationState = {};

interface UseStoreOutput extends AuthenticationState {
  setAuthenticationStoreState: (data: Partial<AuthenticationState>) => void;
  isTokenExpired: () => boolean;
}

export const useStoreAuthentication = StoreHelper.createStore<UseStoreOutput>(
  (set, get) => ({
    ...initialState,
    setAuthenticationStoreState: function (data: Partial<AuthenticationState>) {
      set(
        produce((state: AuthenticationState) => ({ ...state, ...data })),
        false,
        "setAuthenticationStoreState",
      );
    },
    isTokenExpired: function () {
      const { token } = get(); // 👈 uso do get
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
    },
  }),
  "Authentication",
  createJSONStorage(() => localStorage),
);
