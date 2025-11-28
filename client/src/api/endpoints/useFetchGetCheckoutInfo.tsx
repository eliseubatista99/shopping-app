import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput } from "../types";

export type GetCheckoutInfoOutputDto = {
  shippingCost?: number;
  startDeliveryDate?: string;
  fastestDeliveryCost?: number;
  endDeliveryDate?: string;
};

export type GetCheckoutInfoInputDto = {
  productIds: string[];
  addressId: string;
  paymentMethodId: string;
};

export const GetCheckoutInfo = () => {
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
    fetchGetCheckoutInfo: fetch,
  };
};
