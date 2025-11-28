import { useAppFetch } from "@hooks";
import { useCallback } from "react";
import type { CheckoutProductDto } from "../types";

export type ExecutePurchaseInputDto = {
  products: CheckoutProductDto[];
  addressId: string;
  paymentMethodId: string;
  wantsFastShipping: boolean;
};

export const ExecutePurchase = () => {
  const { post } = useAppFetch<void>("ExecutePurchase");

  const fetch = useCallback(
    async (input: ExecutePurchaseInputDto) => {
      const result = await post({
        ...input,
      });

      return result;
    },
    [post]
  );

  return {
    fetchExecutePurchaseInfo: fetch,
  };
};
