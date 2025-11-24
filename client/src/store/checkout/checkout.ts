import type { ProductDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface CheckoutState {
  products?: ProductDto[];
  productCost?: number;
  shippingCost?: number;
  totalCost?: number;
  startDeliveryDate?: string;
  endDeliveryDate?: string;
  wantsFastestOption?: boolean;
}

const initialState: CheckoutState = {};

interface UseStoreOutput extends CheckoutState {
  setPartialState: (data: Partial<CheckoutState>) => void;
}

export const useStoreCheckout = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<CheckoutState>) {
      set(
        produce((state: CheckoutState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Checkout",
  createJSONStorage(() => sessionStorage)
);
