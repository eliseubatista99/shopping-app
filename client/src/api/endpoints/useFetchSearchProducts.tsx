import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type {
  SearchProductsOperationInputDto,
  SearchProductsResponseDto,
} from "../models";

export const SearchProducts = () => {
  const { get } = useFetchNoAuth<SearchProductsResponseDto>({
    endpoint: "SearchProducts",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: SearchProductsOperationInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchSearchProducts: fetch,
  };
};
