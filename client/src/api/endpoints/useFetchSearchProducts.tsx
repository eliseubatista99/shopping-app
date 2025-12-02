import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type { ProductDto } from "../types";

export type SearchProductsInputDto = {
  keyword: string;
};

export type SearchProductsOutputDto = {
  products?: ProductDto[];
};

export const SearchProducts = () => {
  const { get } = useFetchNoAuth<SearchProductsOutputDto>({
    endpoint: "SearchProducts",
  });

  const fetch = useCallback(
    async (input: SearchProductsInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchSearchProducts: fetch,
  };
};
