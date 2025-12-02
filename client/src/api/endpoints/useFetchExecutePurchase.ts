import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { CheckoutProductDto } from "../types";

export type ExecutePurchaseInputDto = {
  products: CheckoutProductDto[];
  addressId: string;
  paymentMethodId: string;
  wantsFastShipping: boolean;
};

export const ExecutePurchase = () => {
  const { post } = useFetchWithAuth<void>({
    endpoint: "ExecutePurchase",
  });

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
