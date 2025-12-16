import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { PaymentMethodDto, PaymentMethodType } from "../../types";

export type AddPaymentMethodInputDto = {
  type: PaymentMethodType;
  name: string;
  cardNumber: string;
  expirationMonth: number;
  expirationYear: number;
};

export type AddPaymentMethodOutputDto = {
  updatedMethods: PaymentMethodDto[];
};

export const AddPaymentMethod = () => {
  const { post } = useFetchWithAuth<AddPaymentMethodOutputDto>({
    endpoint: "AddPaymentMethod",
  });

  const fetch = useCallback(
    async (input: AddPaymentMethodInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchAddPaymentMethod: fetch,
  };
};
