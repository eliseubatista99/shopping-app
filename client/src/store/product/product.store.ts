import type { ProductDetailDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface ProductState {
  selectedProductId?: string;
  selectedProduct?: ProductDetailDto;
}

const initialState: ProductState = {};

interface UseStoreOutput extends ProductState {
  setPartialState: (data: Partial<ProductState>) => void;
}

export const useStoreProduct = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<ProductState>) {
      set(
        produce((state: ProductState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Product",
  createJSONStorage(() => localStorage)
);
