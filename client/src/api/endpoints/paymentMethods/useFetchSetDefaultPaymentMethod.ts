import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  SetDefaultPaymentMethodOperationInputDto,
  SetDefaultPaymentMethodResponseDto,
} from "../../models";

export const SetDefaultPaymentMethod = () => {
  const { patch } = useFetchWithAuth<SetDefaultPaymentMethodResponseDto>({
    endpoint: "SetDefaultPaymentMethod",
  });

  const fetch = useCallback(
    async (input: SetDefaultPaymentMethodOperationInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchSetDefaultPaymentMethod: fetch,
  };
};
