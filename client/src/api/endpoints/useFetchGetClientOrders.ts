import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  GetClientOrdersListParams,
  GetClientOrdersResponseDto,
} from "../models";

export const GetClientOrders = () => {
  const { get } = useFetchWithAuth<GetClientOrdersResponseDto>({
    endpoint: "GetClientOrders",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: GetClientOrdersListParams) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetClientOrders: fetch,
  };
};
