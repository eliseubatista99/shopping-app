import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  AddPaymentMethodOperationInputDto,
  AddPaymentMethodResponseDto,
} from "../../models";

export const AddPaymentMethod = () => {
  const { post } = useFetchWithAuth<AddPaymentMethodResponseDto>({
    endpoint: "AddPaymentMethod",
  });

  const fetch = useCallback(
    async (input: AddPaymentMethodOperationInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchAddPaymentMethod: fetch,
  };
};
