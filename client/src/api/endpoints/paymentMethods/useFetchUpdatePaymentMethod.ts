import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { PaymentMethodDto } from "../../types";

export type UpdatePaymentMethodInputDto = {
  id: string;
  name: string;
  cardNumber: string;
  expirationMonth: number;
  expirationYear: number;
};

export type UpdatePaymentMethodOutputDto = {
  updatedMethods: PaymentMethodDto[];
};

export const UpdatePaymentMethod = () => {
  const { patch } = useFetchWithAuth<UpdatePaymentMethodOutputDto>({
    endpoint: "UpdatePaymentMethod",
  });

  const fetch = useCallback(
    async (input: UpdatePaymentMethodInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchUpdatePaymentMethod: fetch,
  };
};
