import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, CartDto } from "../types";

export type AddToCartInputDto = {
  productIds?: string[];
};

export type AddToCartOutputDto = { cart: CartDto };

export const useFetchAddToCart = () => {
  const { post } = useFetch();

  const fetch = useCallback(
    async (input: AddToCartInputDto) => {
      const result = await post<ApiOutput<AddToCartOutputDto>>(
        `${ApiConfigs.endpoint}/AddToCart`,
        { ...input }
      );

      return result;
    },
    [post]
  );

  return {
    fetchAddToCart: fetch,
  };
};
