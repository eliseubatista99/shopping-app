import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, ProductDetailDto } from "../types";

export type ProductDetailOutputDto = {
  product: ProductDetailDto;
};

export type ProductDetailInputDto = {
  productId: string;
};

export const useFetchProductDetail = () => {
  const { get } = useFetch();

  const fetch = useCallback(
    async (input: ProductDetailInputDto) => {
      const result = await get<ApiOutput<ProductDetailOutputDto>>(
        `${ApiConfigs.endpoint}/ProductDetail`,
        {
          ...input,
        }
      );

      return result;
    },
    [get]
  );

  return {
    fetch,
  };
};
