import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  GetOrderDetailsListParams,
  GetOrderDetailsResponseDto,
} from "../models";

export const GetOrderDetails = () => {
  const { get } = useFetchWithAuth<GetOrderDetailsResponseDto>({
    endpoint: "GetOrderDetails",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: GetOrderDetailsListParams) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetOrderDetails: fetch,
  };
};
