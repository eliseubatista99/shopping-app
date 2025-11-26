import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, OrderDto, OrderStatus, SortMode } from "../types";

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

export const useFetchGetClientOrders = () => {
  const { get } = useFetch();

  const fetch = useCallback(
    async (input: GetClientOrdersInputDto) => {
      const result = await get<ApiOutput<GetClientOrdersOutputDto>>(
        `${ApiConfigs.endpoint}/GetClientOrders`,
        {
          ...input,
        }
      );

      return result;
    },
    [get]
  );

  return {
    fetchGetClientOrders: fetch,
  };
};
