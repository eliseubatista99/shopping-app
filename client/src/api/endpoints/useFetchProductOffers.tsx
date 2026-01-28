import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type { ProductOffersdResponseDto } from "../models";

export const GetProductOffers = () => {
  const { get } = useFetchNoAuth<ProductOffersdResponseDto>({
    endpoint: "ProductOffers",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchProductOffers: fetch,
  };
};
