import type { ProductDetailDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface ProductState {
  selectedProduct?: ProductDetailDto;
}

const initialState: ProductState = {};

interface UseStoreOutput extends ProductState {
  setProductStoreState: (data: Partial<ProductState>) => void;
}

export const useStoreProduct = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setProductStoreState: function (data: Partial<ProductState>) {
      set(
        produce((state: ProductState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Product",
  createJSONStorage(() => sessionStorage)
);
