import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, OrderDetailDto } from "../types";

export type GetOrderDetailsOutputDto = {
  order: OrderDetailDto;
};

export type GetOrderDetailsInputDto = {
  orderId: string;
};

export const GetOrderDetails = () => {
  const { get } = useFetch();

  const fetch = useCallback(
    async (input: GetOrderDetailsInputDto) => {
      const result = await get<ApiOutput<GetOrderDetailsOutputDto>>(
        `${ApiConfigs.endpoint}/GetOrderDetails`,
        {
          ...input,
        }
      );

      return result;
    },
    [get]
  );

  return {
    fetchGetOrderDetails: fetch,
  };
};
