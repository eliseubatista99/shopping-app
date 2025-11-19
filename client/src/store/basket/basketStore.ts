import type { ProductDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

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
  setBasketCount: (data: number) => void;
  setItemsInBasket: (data: ProductDto[]) => void;
}

export const useStoreBasket = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<BasketState>) {
      set(
        produce((state: BasketState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    setBasketCount: function (data: number) {
      set(
        produce((state: BasketState) => ({
          ...state,
          numberOfProductsInBasket: data,
        })),
        false,
        "setBasketCount"
      );
    },
    setItemsInBasket: function (data: ProductDto[]) {
      set(
        produce((state: BasketState) => ({
          ...state,
          products: data,
          numberOfProductsInBasket: data.length,
        })),
        false,
        "setItemsInBasket"
      );
    },
  }),
  "Basket",
  createJSONStorage(() => sessionStorage)
);
