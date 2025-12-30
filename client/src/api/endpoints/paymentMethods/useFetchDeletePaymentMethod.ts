import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { PaymentMethodDto } from "../../models";

export type DeletePaymentMethodInputDto = {
  methodId: string;
};

export type DeletePaymentMethodOutputDto = {
  updatedMethods: PaymentMethodDto[];
};

export const DeletePaymentMethod = () => {
  const { delete: httpDelete } = useFetchWithAuth<DeletePaymentMethodOutputDto>(
    {
      endpoint: "DeletePaymentMethod",
    }
  );

  const fetch = useCallback(
    async (input: DeletePaymentMethodInputDto) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchDeletePaymentMethod: fetch,
  };
};
