import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { PaymentMethodDto } from "../../types";

export type UpdatePaymentMethodInputDto = {
  method: PaymentMethodDto;
};

export type UpdatePaymentMethodOutputDto = {
  updatedMethods: PaymentMethodDto[];
};

export const UpdatePaymentMethod = () => {
  const { post } = useFetchWithAuth<UpdatePaymentMethodOutputDto>({
    endpoint: "UpdatePaymentMethod",
  });

  const fetch = useCallback(
    async (input: UpdatePaymentMethodInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchUpdatePaymentMethod: fetch,
  };
};
