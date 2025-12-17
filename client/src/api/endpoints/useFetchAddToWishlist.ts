import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type { ProductDto } from "../types";

export type AddToWishlistInputDto = {
  product: ProductDto;
};

export const AddToWishlist = () => {
  const { post } = useFetchWithAuth<void>({
    endpoint: "GetWishlist",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: AddToWishlistInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchAddToWishlist: fetch,
  };
};
