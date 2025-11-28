import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, ProductDto } from "../types";

export type GetWishlistOutputDto = {
  products: ProductDto[];
};

export const useFetchGetWishlist = () => {
  const { get } = useFetch();

  const fetch = useCallback(async () => {
    const result = await get<ApiOutput<GetWishlistOutputDto>>(
      `${ApiConfigs.endpoint}/GetWishlist`
    );

    return result;
  }, [get]);

  return {
    fetchGetWishlist: fetch,
  };
};
