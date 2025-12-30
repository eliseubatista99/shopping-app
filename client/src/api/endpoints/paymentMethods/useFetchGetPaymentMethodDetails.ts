import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  GetPaymentMethodDetailsListParams,
  GetPaymentMethodDetailsResponseDto,
} from "../../models";

export const GetPaymentMethodDetails = () => {
  const { get } = useFetchWithAuth<GetPaymentMethodDetailsResponseDto>({
    endpoint: "GetPaymentMethodDetails",
  });

  const fetch = useCallback(
    async (input: GetPaymentMethodDetailsListParams) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetPaymentMethodDetails: fetch,
  };
};
