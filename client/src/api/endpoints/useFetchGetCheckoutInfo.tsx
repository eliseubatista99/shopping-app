import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, ProductDto } from "../types";

export type GetCheckoutInfoOutputDto = {
  products?: ProductDto[];
  productCost?: number;
  shippingCost?: number;
  totalCost?: number;
  startDeliveryDate?: string;
  endDeliveryDate?: string;
};

export type GetCheckoutInfoInputDto = {
  productIds: string[];
  addressId: string;
  paymentMethodId: string;
};

export const useFetchGetCheckoutInfo = () => {
  const { get } = useFetch();

  const fetch = useCallback(
    async (input: GetCheckoutInfoInputDto) => {
      const result = await get<ApiOutput<GetCheckoutInfoOutputDto>>(
        `${ApiConfigs.endpoint}/GetCheckoutInfo`,
        {
          ...input,
        }
      );

      return result;
    },
    [get]
  );

  return {
    fetch,
  };
};
