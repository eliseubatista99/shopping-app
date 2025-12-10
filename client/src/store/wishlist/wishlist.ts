import type { ProductDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface WishlistState {
  products?: ProductDto[];
}

const initialState: WishlistState = {};

interface UseStoreOutput extends WishlistState {
  setWishlistStoreState: (data: Partial<WishlistState>) => void;
  addProducts: (data: ProductDto[]) => void;
}

export const useStoreWishlist = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setWishlistStoreState: function (data: Partial<WishlistState>) {
      set(
        produce((state: WishlistState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    addProducts: function (data: ProductDto[]) {
      set(
        produce((state: WishlistState) => {
          state.products = [...(state.products || []), ...data];
        }),
        false,
        "addProducts"
      );
    },
  }),
  "Wishlist",
  createJSONStorage(() => sessionStorage)
);
