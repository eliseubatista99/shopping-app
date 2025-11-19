import { useCallback } from "react";
import type { ApiOutput, BasketOutputDto } from "../types";

import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { ApiConfigs } from "../configs";

export const useFetchBasket = () => {
  const { get } = useFetch();

  const fetch = useCallback(async () => {
    const result = await get<ApiOutput<BasketOutputDto>>(
      `${ApiConfigs.endpoint}/GetBasket`
    );

    return result;
  }, [get]);

  return {
    fetch,
  };
};
