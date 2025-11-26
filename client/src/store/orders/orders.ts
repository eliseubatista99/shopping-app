import type { OrderDto, OrderStatus } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface OrdersState {
  orders?: OrderDto[];
  textFilter?: string;
  statusFilter?: OrderStatus;
  startDateFilter?: Date;
  endDateFilter?: Date;
}

const initialState: OrdersState = {};

interface UseStoreOutput extends OrdersState {
  setPartialState: (data: Partial<OrdersState>) => void;
}

export const useStoreOrders = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setPartialState: function (data: Partial<OrdersState>) {
      set(
        produce((state: OrdersState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Orders",
  createJSONStorage(() => sessionStorage)
);
