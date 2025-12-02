import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { ProductDto } from "../types";

export type RemoveFromWishlistInputDto = {
  productId: string;
};

export type RemoveFromWishlistOutputDto = {
  updatedWishlist?: ProductDto[];
};

export const RemoveFromWishlist = () => {
  const { delete: httpDelete } = useFetchWithAuth<RemoveFromWishlistOutputDto>({
    endpoint: "RemoveFromWishlist",
  });

  const fetch = useCallback(
    async (input: RemoveFromWishlistInputDto) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchRemoveFromWishlist: fetch,
  };
};
