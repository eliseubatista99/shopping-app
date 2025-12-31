import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  GetWishlistOperationInputDto,
  GetWishlistResponseDto,
} from "../models";

export const GetWishlist = () => {
  const { get } = useFetchWithAuth<GetWishlistResponseDto>({
    endpoint: "GetWishlist",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: GetWishlistOperationInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetWishlist: fetch,
  };
};
