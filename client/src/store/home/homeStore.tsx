import type { ProductDto, ProductOfferGroupDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface HomeState {
  fromSearchHistory?: ProductDto[];
  buyAgain?: ProductDto[];
  groups?: ProductOfferGroupDto[];
  banners?: ProductOfferGroupDto[];
}

const initialState: HomeState = {
  fromSearchHistory: [],
  buyAgain: [],
  groups: [],
  banners: [],
};

interface UseStoreOutput extends HomeState {
  setPartialState: (data: Partial<HomeState>) => void;
}

export const useStoreHome = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<HomeState>) {
      set(
        produce((state: HomeState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Home",
  createJSONStorage(() => localStorage)
);
