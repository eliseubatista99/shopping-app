import { useCallback } from "react";
import type { CartOutputDto } from "../types";

import { useAppFetch } from "@hooks";

export const GetCart = () => {
  const { get } = useAppFetch<CartOutputDto>("GetCart");

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchCart: fetch,
  };
};
