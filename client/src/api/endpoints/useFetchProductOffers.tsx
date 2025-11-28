import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, ProductDto, ProductOfferGroupDto } from "../types";

export type ProductOffersOutputDto = {
  fromSearchHistory: ProductDto[];
  buyAgain: ProductDto[];
  groups: ProductOfferGroupDto[];
  banners: ProductOfferGroupDto[];
};

export const GetProductOffers = () => {
  const { get } = useFetch();

  const fetch = useCallback(async () => {
    const result = await get<ApiOutput<ProductOffersOutputDto>>(
      `${ApiConfigs.endpoint}/ProductOffers`
    );

    return result;
  }, [get]);

  return {
    fetchProductOffers: fetch,
  };
};
