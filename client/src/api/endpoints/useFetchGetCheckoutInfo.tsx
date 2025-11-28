import { useAppFetch } from "@hooks";
import { useCallback } from "react";

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
  const { get } = useAppFetch<GetCheckoutInfoOutputDto>("GetCheckoutInfo");

  const fetch = useCallback(
    async (input: GetCheckoutInfoInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetCheckoutInfo: fetch,
  };
};
