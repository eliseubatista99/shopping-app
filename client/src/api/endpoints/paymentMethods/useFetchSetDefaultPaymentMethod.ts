import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { PaymentMethodDto } from "../../types";

export type SetDefaultPaymentMethodInputDto = {
  methodId: string;
};

export type SetDefaultPaymentMethodOutputDto = {
  updatedMethods: PaymentMethodDto[];
};

export const SetDefaultPaymentMethod = () => {
  const { patch } = useFetchWithAuth<SetDefaultPaymentMethodOutputDto>({
    endpoint: "SetDefaultPaymentMethod",
  });

  const fetch = useCallback(
    async (input: SetDefaultPaymentMethodInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchSetDefaultPaymentMethod: fetch,
  };
};
