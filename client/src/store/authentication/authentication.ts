import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface AuthenticationState {
  token?: string;
  isAuthenticated?: boolean;
}

const initialState: AuthenticationState = {};

interface UseStoreOutput extends AuthenticationState {
  setAuthenticationStoreState: (data: Partial<AuthenticationState>) => void;
}

export const useStoreAuthentication = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setAuthenticationStoreState: function (data: Partial<AuthenticationState>) {
      set(
        produce((state: AuthenticationState) => ({ ...state, ...data })),
        false,
        "setAuthenticationStoreState"
      );
    },
  }),
  "Authentication",
  createJSONStorage(() => localStorage)
);
