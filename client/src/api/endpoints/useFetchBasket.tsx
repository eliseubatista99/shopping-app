import { useCallback } from "react";
import type { CartProductDto } from "../types";

import { useAppFetch } from "@hooks";

export type GetCartOutputDto = { products: CartProductDto[] };

export const GetCart = () => {
  const { get } = useAppFetch<GetCartOutputDto>("GetCart");

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchCart: fetch,
  };
};
