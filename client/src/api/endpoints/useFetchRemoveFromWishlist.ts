import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  RemoveFromWishlistOperationInputDto,
  RemoveFromWishlistResponseDto,
} from "../models";

export const RemoveFromWishlist = () => {
  const { delete: httpDelete } =
    useFetchWithAuth<RemoveFromWishlistResponseDto>({
      endpoint: "RemoveFromWishlist",
      showGenericErrorModal: false,
    });

  const fetch = useCallback(
    async (input: RemoveFromWishlistOperationInputDto) => {
      const result = await httpDelete({ ...input });

      return result;
    },
    [httpDelete]
  );

  return {
    fetchRemoveFromWishlist: fetch,
  };
};
