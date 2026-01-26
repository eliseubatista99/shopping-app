import type { CheckoutProductDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface CheckoutState {
  products?: CheckoutProductDto[];
  productCost?: number;
  shippingCost?: number;
  totalCost?: number;
  fastestDeliveryCost?: number;
  startDeliveryDate?: string;
  endDeliveryDate?: string;
  wantsFastestOption?: boolean;
}

const initialState: CheckoutState = {};

interface UseStoreOutput extends CheckoutState {
  setCheckoutStoreState: (data: Partial<CheckoutState>) => void;
  changeProductQuantity: (
    product: CheckoutProductDto,
    quantity: number,
  ) => void;
  recalculate: () => void;
}

export const useStoreCheckout = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setCheckoutStoreState: function (data: Partial<CheckoutState>) {
      set(
        produce((state: CheckoutState) => ({ ...state, ...data })),
        false,
        "setPartialState",
      );
    },
    changeProductQuantity: function (
      product: CheckoutProductDto,
      quantity: number,
    ) {
      set(
        produce((state: CheckoutState) => {
          if (quantity > 0) {
            const item = state.products?.find(
              (p) => p.productId === product.productId,
            );

            if (item) {
              item.quantity = quantity;
            }
          } else {
            state.products = state.products?.filter(
              (p) => p.productId !== p.productId,
            );
          }
        }),
        false,
        "changeProductQuantity",
      );
    },
    recalculate: function () {
      set(
        produce((state: CheckoutState) => {
          let productCost = 0;

          let totalCost = (state.productCost || 0) + (state.shippingCost || 0);

          if (state.wantsFastestOption) {
            totalCost += state.fastestDeliveryCost || 0;
          }

          state.productCost = productCost;
          state.totalCost = totalCost;
        }),
        false,
        "recalculate",
      );
    },
  }),
  "Checkout",
  createJSONStorage(() => sessionStorage),
);
