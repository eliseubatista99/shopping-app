import type { ProductDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

type ProductWithQuantity = ProductDto & {
  quantity?: number;
};

export interface CheckoutState {
  products?: ProductWithQuantity[];
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
  setPartialState: (data: Partial<CheckoutState>) => void;
  changeProductQuantity: (
    product: ProductWithQuantity,
    quantity: number
  ) => void;
  recalculate: () => void;
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
    changeProductQuantity: function (
      product: ProductWithQuantity,
      quantity: number
    ) {
      set(
        produce((state: CheckoutState) => {
          if (quantity > 0) {
            const item = state.products?.find((p) => p.id === product.id);

            if (item) {
              item.quantity = quantity;
            }
          } else {
            state.products = state.products?.filter((p) => p.id !== product.id);
          }
        }),
        false,
        "changeProductQuantity"
      );
    },
    recalculate: function () {
      set(
        produce((state: CheckoutState) => {
          let productCost = 0;

          (state.products || []).forEach((p) => {
            productCost += p.price * (p.quantity || 1);
          });

          let totalCost = productCost + (state.shippingCost || 0);

          if (state.wantsFastestOption) {
            totalCost += state.fastestDeliveryCost || 0;
          }

          state.productCost = productCost;
          state.totalCost = totalCost;
        }),
        false,
        "recalculate"
      );
    },
  }),
  "Checkout",
  createJSONStorage(() => sessionStorage)
);
