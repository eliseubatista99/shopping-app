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
  oldestOrderDate?: string;
}

const initialState: OrdersState = {};

interface UseStoreOutput extends OrdersState {
  setPartialState: (data: Partial<OrdersState>) => void;
  setSortFilter: (sort?: SortMode) => void;
  setStatusFilter: (status?: OrderStatus) => void;
  setStartDateFilter: (value?: Date) => void;
  setEndDateFilter: (value?: Date) => void;
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
    setStartDateFilter: function (value?: Date) {
      set(
        produce((state: OrdersState) => ({ ...state, startDateFilter: value })),
        false,
        "setStartDateFilter"
      );
    },
    setEndDateFilter: function (value?: Date) {
      set(
        produce((state: OrdersState) => ({ ...state, endDateFilter: value })),
        false,
        "setEndDateFilter"
      );
    },
  }),
  "Orders",
  createJSONStorage(() => sessionStorage)
);
