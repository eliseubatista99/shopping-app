import { useCallback } from "react";
import type { ApiOutput, CartOutputDto } from "../types";

import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { ApiConfigs } from "../configs";

export const useFetchCart = () => {
  const { get } = useFetch();

  const fetch = useCallback(async () => {
    const result = await get<ApiOutput<CartOutputDto>>(
      `${ApiConfigs.endpoint}/GetBasket`
    );

    return result;
  }, [get]);

  return {
    fetchCart: fetch,
  };
};
