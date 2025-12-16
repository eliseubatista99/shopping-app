import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type { ProductDto, SortMode } from "../types";

export type SearchProductsInputDto = {
  page?: number;
  pageCount?: number;
  text?: string;
  score?: number;
  maxPrice?: number;
  minPrice?: number;
  bestSeller?: boolean;
  freeShipping?: boolean;
  category?: string;
  sort?: SortMode;
};

export type SearchProductsOutputDto = {
  products?: ProductDto[];
  hasMorePages?: boolean;
};

export const SearchProducts = () => {
  const { get } = useFetchNoAuth<SearchProductsOutputDto>({
    endpoint: "SearchProducts",
    showGenericErrorModal: false,
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
