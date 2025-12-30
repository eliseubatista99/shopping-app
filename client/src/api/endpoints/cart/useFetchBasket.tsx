import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { CartProductDetailsDto } from "../../models";

export type GetCartOutputDto = { products: CartProductDetailsDto[] };

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
