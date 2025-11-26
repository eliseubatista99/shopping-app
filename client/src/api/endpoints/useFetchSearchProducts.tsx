import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, ProductDto } from "../types";

export type SearchProductsInputDto = {
  keyword: string;
};

export type SearchProductsOutputDto = {
  products?: ProductDto[];
};

export const useFetchSearchProducts = () => {
  const { get } = useFetch();

  const fetch = useCallback(
    async (input: SearchProductsInputDto) => {
      const result = await get<ApiOutput<SearchProductsOutputDto>>(
        `${ApiConfigs.endpoint}/SearchProducts`,
        { ...input }
      );

      return result;
    },
    [get]
  );

  return {
    fetchSearchProducts: fetch,
  };
};
