import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { CartProductDto } from "../types";

export type AddToCartInputDto = {
  productIds?: string[];
};

export type AddToCartOutputDto = { products: CartProductDto[] };

export const AddToCard = () => {
  const { post } = useFetchWithAuth<AddToCartOutputDto>({
    endpoint: "AddToCart",
  });

  const fetch = useCallback(
    async (input: AddToCartInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchAddToCart: fetch,
  };
};
