import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type {
  GetProductReviewsOperationInputDto,
  GetProductReviewsResponseDto,
} from "../models";

export const GetProductReviews = () => {
  const { get } = useFetchNoAuth<GetProductReviewsResponseDto>({
    endpoint: "GetProductReviews",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: GetProductReviewsOperationInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetProductReviews: fetch,
  };
};
