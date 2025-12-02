import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { ProductDetailDto } from "../types";

export type ProductDetailOutputDto = {
  product: ProductDetailDto;
};

export type ProductDetailInputDto = {
  productId: string;
};

export const GetProductDetails = () => {
  const { get } = useAppFetch<ProductDetailOutputDto>({
    endpoint: "ProductDetail",
  });

  const fetch = useCallback(
    async (input: ProductDetailInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchProductDetail: fetch,
  };
};
