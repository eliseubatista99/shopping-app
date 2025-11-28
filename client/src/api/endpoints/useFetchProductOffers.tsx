import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { ProductDto, ProductOfferGroupDto } from "../types";

export type ProductOffersOutputDto = {
  fromSearchHistory: ProductDto[];
  buyAgain: ProductDto[];
  groups: ProductOfferGroupDto[];
  banners: ProductOfferGroupDto[];
};

export const GetProductOffers = () => {
  const { get } = useAppFetch<ProductOffersOutputDto>("ProductOffers");

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchProductOffers: fetch,
  };
};
