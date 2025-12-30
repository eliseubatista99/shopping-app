import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  DeletePaymentMethodDeleteParams,
  DeletePaymentMethodResponseDto,
} from "../../models";

export const DeletePaymentMethod = () => {
  const { delete: httpDelete } =
    useFetchWithAuth<DeletePaymentMethodResponseDto>({
      endpoint: "DeletePaymentMethod",
    });

  const fetch = useCallback(
    async (input: DeletePaymentMethodDeleteParams) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchDeletePaymentMethod: fetch,
  };
};
