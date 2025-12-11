import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { CartProductDto } from "../types";

export type RemoveFromCartInputDto = {
  productIds?: string[];
};

export type RemoveFromCartOutputDto = { products: CartProductDto[] };

export const RemoveFromCart = () => {
  const { delete: httpDelete } = useFetchWithAuth<RemoveFromCartOutputDto>({
    endpoint: "RemoveFromCart",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: RemoveFromCartInputDto) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchRemoveFromCart: fetch,
  };
};
