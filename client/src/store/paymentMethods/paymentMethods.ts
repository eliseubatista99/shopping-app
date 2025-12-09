import type { PaymentMethodDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface PaymentMethodsState {
  paymentMethods?: PaymentMethodDto[];
  selectedPaymentMethod?: PaymentMethodDto;
  paymentMethodInEdit?: PaymentMethodDto;
}

const initialState: PaymentMethodsState = {};

interface UseStoreOutput extends PaymentMethodsState {
  setStorePaymentMethodsState: (data: Partial<PaymentMethodsState>) => void;
  setPaymentMethods: (data: PaymentMethodDto[]) => void;
}

export const useStorePaymentMethods = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setStorePaymentMethodsState: function (data: Partial<PaymentMethodsState>) {
      set(
        produce((state: PaymentMethodsState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    setPaymentMethods: function (data: PaymentMethodDto[]) {
      set(
        produce((state: PaymentMethodsState) => {
          state.paymentMethods = data;

          state.selectedPaymentMethod = data.find((p) => p.isDefault);
        }),
        false,
        "setPaymentMethods"
      );
    },
  }),

  "PaymentMethods",
  createJSONStorage(() => sessionStorage)
);
