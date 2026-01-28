import { useFetchWithAuth } from "@hooks";
import { useCallback } from "react";
import type {
  AddToCartOperationInputDto,
  AddToCartResponseDto,
} from "../../models";

export const AddToCard = () => {
  const { post } = useFetchWithAuth<AddToCartResponseDto>({
    endpoint: "AddToCart",
  });

  const fetch = useCallback(
    async (input: AddToCartOperationInputDto) => {
      const result = await post({ ...input });

      return result;
    },
    [post]
  );

  return {
    fetchAddToCart: fetch,
  };
};
