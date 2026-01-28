import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type {
  ProductDetailOperationInputDto,
  ProductDetailResponseDto,
} from "../models";

export const GetProductDetails = () => {
  const { get } = useFetchNoAuth<ProductDetailResponseDto>({
    endpoint: "ProductDetail",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: ProductDetailOperationInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchProductDetail: fetch,
  };
};
