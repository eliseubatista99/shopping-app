import type { ProductDto, ProductOfferGroupDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

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
  setHomeStoreState: (data: Partial<HomeState>) => void;
}

export const useStoreHome = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setHomeStoreState: function (data: Partial<HomeState>) {
      set(
        produce((state: HomeState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Home",
  createJSONStorage(() => sessionStorage)
);
