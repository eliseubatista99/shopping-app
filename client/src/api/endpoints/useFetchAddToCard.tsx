import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { ProductDto } from "../types";

export type AddToCartInputDto = {
  productIds?: string[];
};

export type AddToCartOutputDto = { products: ProductDto[] };

export const AddToCard = () => {
  const { post } = useAppFetch<AddToCartOutputDto>("AddToCart");

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
