import type { AddressDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface AddressesState {
  addresses?: AddressDto[];
  selectedAddress?: AddressDto;
  addressInEdit?: AddressDto;
}

const initialState: AddressesState = {};

interface UseStoreOutput extends AddressesState {
  setStoreAddressesState: (data: Partial<AddressesState>) => void;
  setAddresses: (data: AddressDto[]) => void;
}

export const useStoreAddresses = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setStoreAddressesState: function (data: Partial<AddressesState>) {
      set(
        produce((state: AddressesState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    setAddresses: function (data: AddressDto[]) {
      set(
        produce((state: AddressesState) => {
          state.addresses = data;

          state.selectedAddress = data.find((p) => p.isDefault);
        }),
        false,
        "setAddresses"
      );
    },
  }),
  "Addresses",
  createJSONStorage(() => sessionStorage)
);
