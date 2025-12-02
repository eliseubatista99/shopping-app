import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { OrderDetailDto } from "../types";

export type GetOrderDetailsOutputDto = {
  order: OrderDetailDto;
};

export type GetOrderDetailsInputDto = {
  orderId: string;
};

export const GetOrderDetails = () => {
  const { get } = useAppFetch<GetOrderDetailsOutputDto>({
    endpoint: "GetOrderDetails",
    secure: true,
  });

  const fetch = useCallback(
    async (input: GetOrderDetailsInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetOrderDetails: fetch,
  };
};
