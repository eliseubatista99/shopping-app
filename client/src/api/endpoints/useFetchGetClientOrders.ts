import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { OrderDto, OrderStatus, SortMode } from "../types";

export type GetClientOrdersOutputDto = {
  orders: OrderDto[];
  oldestOrderDate?: string;
  hasMorePages: boolean;
};

export type GetClientOrdersInputDto = {
  orderId?: string;
  page?: number;
  pageCount?: number;
  filterByText?: string;
  filterByStatus?: OrderStatus;
  sortMode?: SortMode;
  filterByStartDate?: string;
  filterByEndDate?: string;
};

export const GetClientOrders = () => {
  const { get } = useAppFetch<GetClientOrdersOutputDto>("GetClientOrders");

  const fetch = useCallback(
    async (input: GetClientOrdersInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetClientOrders: fetch,
  };
};
