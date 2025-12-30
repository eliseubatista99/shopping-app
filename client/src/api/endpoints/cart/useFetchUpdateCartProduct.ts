import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { CartProductDto } from "../../models";

export type UpdateCartProductInputDto = {
  products: CartProductDto[];
};

export type UpdateCartProductOutputDto = { products: CartProductDto[] };

export const UpdateCartProduct = () => {
  const { patch } = useFetchWithAuth<UpdateCartProductOutputDto>({
    endpoint: "UpdateCartProduct",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: UpdateCartProductInputDto) => {
      const result = await patch({ ...input });

      return result;
    },
    [patch]
  );

  return {
    fetchUpdateCartProduct: fetch,
  };
};
