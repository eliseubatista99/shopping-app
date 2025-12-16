import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface BaseState {
  language: LanguageType;
  currency?: string;
}

export const initialState: BaseState = {
  language: "en",
  currency: "€",
};

interface UseStoreOutput extends BaseState {
  setBaseStoreState: (data: Partial<BaseState>) => void;
}

export const useStoreBase = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setBaseStoreState: function (data: Partial<BaseState>) {
      set(
        produce((state: BaseState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Base",
  createJSONStorage(() => localStorage)
);
