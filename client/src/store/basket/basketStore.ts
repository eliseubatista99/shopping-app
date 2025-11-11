import type { ProductDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface BasketState {
  numberOfProductsInBasket?: number;
  products?: ProductDto[];
}

const initialState: BasketState = {
  numberOfProductsInBasket: 0,
  products: [],
};

interface UseStoreOutput extends BasketState {
  setPartialState: (data: Partial<BasketState>) => void;
}

export const useStoreBasketZustand = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<BasketState>) {
      set(
        produce((state: BasketState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Basket",
  createJSONStorage(() => localStorage)
);
