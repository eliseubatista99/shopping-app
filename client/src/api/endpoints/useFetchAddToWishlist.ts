import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  AddToWishlistOperationInputDto,
  AddToWishlistResponseDto,
} from "../models";

export const AddToWishlist = () => {
  const { post } = useFetchWithAuth<AddToWishlistResponseDto>({
    endpoint: "GetWishlist",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: AddToWishlistOperationInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchAddToWishlist: fetch,
  };
};
