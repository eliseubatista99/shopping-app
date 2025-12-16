import type { OrderDetailDto, OrderDto, OrderStatus, SortMode } from "@api";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type OrdersFilters = {
  textFilter?: string;
  statusFilter?: OrderStatus;
  startDateFilter?: string;
  endDateFilter?: string;
  sortFilter?: SortMode;
};

export interface OrdersState {
  selectedOrder?: OrderDetailDto;
  orders?: OrderDto[];
  oldestOrderDate?: string;
  filters?: OrdersFilters;
}

const initialState: OrdersState = {};

interface UseStoreOutput extends OrdersState {
  setOrdersStoreState: (data: Partial<OrdersState>) => void;
  setOrderFilters: (data: Partial<OrdersFilters>) => void;
  addOrders: (data: OrderDto[]) => void;
}

export const useStoreOrders = StoreHelper.createStore<UseStoreOutput>(
  (set) => ({
    ...initialState,
    setOrdersStoreState: function (data: Partial<OrdersState>) {
      set(
        produce((state: OrdersState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
    setOrderFilters: function (data: Partial<OrdersFilters>) {
      set(
        produce((state: OrdersState) => ({
          ...state,
          filters: { ...state.filters, ...data },
        })),
        false,
        "setOrderFilters"
      );
    },
    addOrders: function (data: OrderDto[]) {
      set(
        produce((state: OrdersState) => {
          state.orders = [...(state.orders || []), ...data];
        }),
        false,
        "addOrders"
      );
    },
  }),
  "Orders",
  createJSONStorage(() => sessionStorage)
);
