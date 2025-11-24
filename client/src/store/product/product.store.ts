import type { ProductDetailDto, SortMode } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface ProductState {
  selectedProduct?: ProductDetailDto;
  sortFilter?: SortMode;
  scoreFilter?: number;
}

const initialState: ProductState = {};

interface UseStoreOutput extends ProductState {
  setPartialState: (data: Partial<ProductState>) => void;
  setSortFilter: (sort?: SortMode) => void;
  setScoreFilter: (score?: number) => void;
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
    setSortFilter: function (sort?: SortMode) {
      set(
        produce((state: ProductState) => ({ ...state, sortFilter: sort })),
        false,
        "setSortFilter"
      );
    },
    setScoreFilter: function (score?: number) {
      set(
        produce((state: ProductState) => ({ ...state, scoreFilter: score })),
        false,
        "setScoreFilter"
      );
    },
  }),
  "Product",
  createJSONStorage(() => sessionStorage)
);
