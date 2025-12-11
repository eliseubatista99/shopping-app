import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { CartProductDto } from "../types";

export type GetCartOutputDto = { products: CartProductDto[] };

export const GetCart = () => {
  const { get } = useFetchWithAuth<GetCartOutputDto>({
    endpoint: "GetCart",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(async () => {
    const result = await get({});

    return result;
  }, [get]);

  return {
    fetchCart: fetch,
  };
};
