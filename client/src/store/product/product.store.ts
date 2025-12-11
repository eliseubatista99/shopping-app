import type { ProductDetailDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type ProductFilters = {
  text?: string;
  score?: number;
  maxPrice?: number;
  minPrice?: number;
  bestSeller?: boolean;
  freeShipping?: boolean;
  category?: string;
};

export interface ProductState {
  selectedProduct?: ProductDetailDto;
  // filters?: ProductFilters;
}

const initialState: ProductState = {};

interface UseStoreOutput extends ProductState {
  setProductStoreState: (data: Partial<ProductState>) => void;
  // setProductFilters: (data: Partial<ProductFilters>) => void;
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
    // setProductFilters: function (data: Partial<ProductFilters>) {
    //   set(
    //     produce((state: ProductState) => ({
    //       ...state,
    //       filters: { ...state.filters, ...data },
    //     })),
    //     false,
    //     "setProductFilters"
    //   );
    // },
  }),
  "Product",
  createJSONStorage(() => sessionStorage)
);
