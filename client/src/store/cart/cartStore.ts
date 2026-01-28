import type { CartProductDetailsDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface CartState {
  numberOfProductsInBasket?: number;
  products?: CartProductDetailsDto[];
}

const initialState: CartState = {
  numberOfProductsInBasket: 0,
  products: [],
};

interface UseStoreOutput extends CartState {
  setCartStoreState: (data: Partial<CartState>) => void;
  setCartCount: (data: number) => void;
  setItemsInCart: (data: CartProductDetailsDto[]) => void;
}

export const useStoreCart = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setCartStoreState: function (data: Partial<CartState>) {
      set(
        produce((state: CartState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    setCartCount: function (data: number) {
      set(
        produce((state: CartState) => ({
          ...state,
          numberOfProductsInBasket: data,
        })),
        false,
        "setBasketCount"
      );
    },
    setItemsInCart: function (data: CartProductDetailsDto[]) {
      set(
        produce((state: CartState) => ({
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
