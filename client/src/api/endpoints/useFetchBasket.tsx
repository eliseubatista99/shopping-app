import { useCallback } from "react";
import type { CartProductDto } from "../types";

import { useAppFetch } from "@hooks";

export type GetCartOutputDto = { products: CartProductDto[] };

export const GetCart = () => {
  const { get } = useAppFetch<GetCartOutputDto>({
    endpoint: "GetCart",
    secure: true,
  });

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchCart: fetch,
  };
};
