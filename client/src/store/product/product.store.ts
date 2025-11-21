import type { ProductDetailDto, ReviewDto, ScoreCountDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface ProductState {
  selectedProduct?: ProductDetailDto;
  allReviews?: ReviewDto[];
  scoreCounts?: ScoreCountDto[];
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
  createJSONStorage(() => sessionStorage)
);
