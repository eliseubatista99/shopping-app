import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { ProductDto } from "../types";

export type GetWishlistOutputDto = {
  products: ProductDto[];
  hasMorePages: boolean;
};

export type GetWishlistInputDto = {
  page?: number;
  pageCount?: number;
};

export const GetWishlist = () => {
  const { get } = useFetchWithAuth<GetWishlistOutputDto>({
    endpoint: "GetWishlist",
  });

  const fetch = useCallback(
    async (input: GetWishlistInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetWishlist: fetch,
  };
};
