import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type { ProductDto } from "../types";

export type SearchProductsInputDto = {
  keyword: string;
  page?: number;
  pageCount?: number;
  scoreFilter?: number;
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
