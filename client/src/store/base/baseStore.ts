import { produce } from "immer";
import type { ClientInfoDto } from "src/services";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface BaseState {
  language: LanguageType;
  client?: ClientInfoDto;
}

export const initialBaseState: BaseState = {
  language: "en",
};

interface UseBaseStoreOutput extends BaseState {
  setPartialState: (data: Partial<BaseState>) => void;
}

export const useStoreBaseZustand = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialBaseState,
    setPartialState: function (data: Partial<BaseState>) {
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
