import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";

export type AddToWishlistInputDto = {
  productId: string;
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
