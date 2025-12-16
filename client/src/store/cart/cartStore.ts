import type { CartProductDto, ProductDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface CartState {
  numberOfProductsInBasket?: number;
  products?: CartProductDto[];
}

const initialState: CartState = {
  numberOfProductsInBasket: 0,
  products: [],
};

interface UseStoreOutput extends CartState {
  setCartStoreState: (data: Partial<CartState>) => void;
  setCartCount: (data: number) => void;
  setItemsInCart: (data: ProductDto[]) => void;
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
    setItemsInCart: function (data: ProductDto[]) {
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
