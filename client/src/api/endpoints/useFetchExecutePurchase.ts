import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  ExecutePurchaseOperationInputDto,
  ExecutePurchaseResponseDto,
} from "../models";

export const ExecutePurchase = () => {
  const { post } = useFetchWithAuth<ExecutePurchaseResponseDto>({
    endpoint: "ExecutePurchase",
  });

  const fetch = useCallback(
    async (input: ExecutePurchaseOperationInputDto) => {
      const result = await post({
        ...input,
      });

      return result;
    },
    [post]
  );

  return {
    fetchExecutePurchaseInfo: fetch,
  };
};
