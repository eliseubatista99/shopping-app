import type { AddressDto, ClientInfoDto, PaymentMethodDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type LanguageType = "pt" | "en";

export interface BaseState {
  language: LanguageType;
  client?: ClientInfoDto;
  selectedPaymentMethod?: PaymentMethodDto;
  selectedAddress?: AddressDto;
  currency?: string;
}

export const initialState: BaseState = {
  language: "en",
  currency: "€",
};

interface UseStoreOutput extends BaseState {
  setBaseStoreState: (data: Partial<BaseState>) => void;
  setClientInfo: (data: ClientInfoDto) => void;
  setPaymentMethods: (data: PaymentMethodDto[]) => void;
}

export const useStoreBase = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setBaseStoreState: function (data: Partial<BaseState>) {
      set(
        produce((state: BaseState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    setClientInfo: function (data: ClientInfoDto) {
      set(
        produce((state: BaseState) => ({
          ...state,
          client: {
            ...state.client,
            ...data,
          },
        })),
        false,
        "setClientInfo"
      );
    },
    setPaymentMethods: function (data: PaymentMethodDto[]) {
      set(
        produce((state: BaseState) => {
          if (state.client) {
            state.client.paymentMethods = data;

            state.selectedPaymentMethod = data.find((p) => p.isDefault);
          }
        }),
        false,
        "setPaymentMethods"
      );
    },
  }),
  "Base",
  createJSONStorage(() => sessionStorage)
);
