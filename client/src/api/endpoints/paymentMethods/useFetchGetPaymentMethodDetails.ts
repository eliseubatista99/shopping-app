import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { PaymentMethodDetailsDto } from "../../models";

export type GetPaymentMethodDetailsInputDto = {
  methodId: string;
};

export type GetPaymentMethodDetailsOutputDto = {
  method: PaymentMethodDetailsDto;
};

export const GetPaymentMethodDetails = () => {
  const { get } = useFetchWithAuth<GetPaymentMethodDetailsOutputDto>({
    endpoint: "GetPaymentMethodDetails",
  });

  const fetch = useCallback(
    async (input: GetPaymentMethodDetailsInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetPaymentMethodDetails: fetch,
  };
};
