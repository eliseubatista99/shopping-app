import type { OrderDto, OrderStatus, SortMode } from "@api";
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
  setSortFilter: (sort?: SortMode) => void;
  setStatusFilter: (status?: OrderStatus) => void;
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
    setSortFilter: function (sort?: SortMode) {
      set(
        produce((state: OrdersState) => ({ ...state, sortFilter: sort })),
        false,
        "setSortFilter"
      );
    },
    setStatusFilter: function (status?: OrderStatus) {
      set(
        produce((state: OrdersState) => ({ ...state, statusFilter: status })),
        false,
        "setStatusFilter"
      );
    },
  }),
  "Orders",
  createJSONStorage(() => sessionStorage)
);
