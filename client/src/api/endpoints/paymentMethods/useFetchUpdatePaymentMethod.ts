import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  UpdatePaymentMethodOperationInputDto,
  UpdatePaymentMethodResponseDto,
} from "src/api/models";

export const UpdatePaymentMethod = () => {
  const { patch } = useFetchWithAuth<UpdatePaymentMethodResponseDto>({
    endpoint: "UpdatePaymentMethod",
  });

  const fetch = useCallback(
    async (input: UpdatePaymentMethodOperationInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchUpdatePaymentMethod: fetch,
  };
};
