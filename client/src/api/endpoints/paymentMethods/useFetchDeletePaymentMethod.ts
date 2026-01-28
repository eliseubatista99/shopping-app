import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  DeletePaymentMethodOperationInputDto,
  DeletePaymentMethodResponseDto,
} from "../../models";

export const DeletePaymentMethod = () => {
  const { delete: httpDelete } =
    useFetchWithAuth<DeletePaymentMethodResponseDto>({
      endpoint: "DeletePaymentMethod",
    });

  const fetch = useCallback(
    async (input: DeletePaymentMethodOperationInputDto) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchDeletePaymentMethod: fetch,
  };
};
