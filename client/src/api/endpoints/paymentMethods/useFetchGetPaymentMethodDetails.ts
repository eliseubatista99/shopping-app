import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  GetPaymentMethodDetailsOperationInputDto,
  GetPaymentMethodDetailsResponseDto,
} from "../../models";

export const GetPaymentMethodDetails = () => {
  const { get } = useFetchWithAuth<GetPaymentMethodDetailsResponseDto>({
    endpoint: "GetPaymentMethodDetails",
  });

  const fetch = useCallback(
    async (input: GetPaymentMethodDetailsOperationInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetPaymentMethodDetails: fetch,
  };
};
