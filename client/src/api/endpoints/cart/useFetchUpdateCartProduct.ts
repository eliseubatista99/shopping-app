import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  UpdateCartProductOperationInputDto,
  UpdateCartResponseDto,
} from "../../models";

export const UpdateCartProduct = () => {
  const { patch } = useFetchWithAuth<UpdateCartResponseDto>({
    endpoint: "UpdateCartProduct",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: UpdateCartProductOperationInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchUpdateCartProduct: fetch,
  };
};
