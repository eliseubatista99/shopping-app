import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { CartProductDto } from "../types";

export type UpdateCartProductInputDto = {
  products: CartProductDto[];
};

export type UpdateCartProductOutputDto = { products: CartProductDto[] };

export const UpdateCartProduct = () => {
  const { post } = useFetchWithAuth<UpdateCartProductOutputDto>({
    endpoint: "UpdateCartProduct",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: UpdateCartProductInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchUpdateCartProduct: fetch,
  };
};
