import { produce } from "immer";
import type { ProductDto } from "src/services/useFetchBasket";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface BasketState {
  numberOfProductsInBasket?: number;
  products?: ProductDto[];
}

const initialBasketState: BasketState = {
  numberOfProductsInBasket: 0,
  products: [],
};

interface UseBaseStoreOutput extends BasketState {
  setPartialState: (data: Partial<BasketState>) => void;
}

export const useStoreBasketZustand =
  StoreHelper.createStore<UseBaseStoreOutput>(
    (set) => ({
      ...initialBasketState,
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
