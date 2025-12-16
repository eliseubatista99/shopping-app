import type { ClientInfoDto } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface ClientState {
  client?: ClientInfoDto;
}

const initialState: ClientState = {};

interface UseStoreOutput extends ClientState {
  setClientStoreState: (data: Partial<ClientState>) => void;
  setClientInfo: (data: ClientInfoDto) => void;
}

export const useStoreClient = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setClientStoreState: function (data: Partial<ClientState>) {
      set(
        produce((state: ClientState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    setClientInfo: function (data: ClientInfoDto) {
      set(
        produce((state: ClientState) => ({
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
  }),
  "Client",
  createJSONStorage(() => sessionStorage)
);
