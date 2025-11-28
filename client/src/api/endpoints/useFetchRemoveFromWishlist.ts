import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, ProductDto } from "../types";

export type RemoveFromWishlistInputDto = {
  productId: string;
};

export type RemoveFromWishlistOutputDto = {
  updatedWishlist?: ProductDto[];
};

export const useFetchRemoveFromWishlist = () => {
  const { delete: httpDelete } = useFetch();

  const fetch = useCallback(
    async (input: RemoveFromWishlistInputDto) => {
      const result = await httpDelete<ApiOutput<RemoveFromWishlistOutputDto>>(
        `${ApiConfigs.endpoint}/RemoveFromWishlist`,
        { ...input }
      );

      return result;
    },
    [httpDelete]
  );

  return {
    fetchRemoveFromWishlist: fetch,
  };
};
