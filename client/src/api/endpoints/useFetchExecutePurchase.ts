import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, CheckoutProductDto } from "../types";

export type ExecutePurchaseInputDto = {
  products: CheckoutProductDto[];
  addressId: string;
  paymentMethodId: string;
};

export const useFetchExecutePurchase = () => {
  const { post } = useFetch();

  const fetch = useCallback(
    async (input: ExecutePurchaseInputDto) => {
      const result = await post<ApiOutput<void>>(
        `${ApiConfigs.endpoint}/ExecutePurchase`,
        {
          ...input,
        }
      );

      return result;
    },
    [post]
  );

  return {
    fetch,
  };
};
