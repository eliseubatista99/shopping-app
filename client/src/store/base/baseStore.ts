import type { ClientInfoDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface BaseState {
  language: LanguageType;
  client?: ClientInfoDto;
  currency?: string;
}

export const initialState: BaseState = {
  language: "en",
  currency: "€",
};

interface UseStoreOutput extends BaseState {
  setPartialState: (data: Partial<BaseState>) => void;
  setClientInfo: (data: ClientInfoDto) => void;
}

export const useStoreBase = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<BaseState>) {
      set(
        produce((state: BaseState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    setClientInfo: function (data: ClientInfoDto) {
      set(
        produce((state: BaseState) => ({
          ...state,
          client: {
            ...state.client,
            ...data,
          },
        })),
        false,
        "setClientInfo"
      );
    },
  }),
  "Base",
  createJSONStorage(() => localStorage)
);
