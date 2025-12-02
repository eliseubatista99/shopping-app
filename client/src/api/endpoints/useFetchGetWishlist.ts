import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { ProductDto } from "../types";

export type GetWishlistOutputDto = {
  products: ProductDto[];
};

export const GetWishlist = () => {
  const { get } = useFetchWithAuth<GetWishlistOutputDto>({
    endpoint: "GetWishlist",
  });

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchGetWishlist: fetch,
  };
};
