import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { GetCartResponseDto } from "../../models";

export const GetCart = () => {
  const { get } = useFetchWithAuth<GetCartResponseDto>({
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
