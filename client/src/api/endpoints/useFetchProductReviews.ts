import { useFetchNoAuth } from "@hooks";
import { useCallback } from "react";
import type { ReviewDto, ScoreCountDto, SortMode } from "../types";

export type GetProductReviewsInputDto = {
  productId: string;
  page: number;
  pageCount: number;
  filterByRating?: number;
  sortMode?: SortMode;
};

export type GetProductReviewsOutputDto = {
  productName: string;
  productId: string;
  averageScore: number;
  reviewsCount: number;
  scores: ScoreCountDto[];
  reviews: ReviewDto[];
  hasMorePages: boolean;
};

export const GetProductReviews = () => {
  const { get } = useFetchNoAuth<GetProductReviewsOutputDto>({
    endpoint: "GetProductReviews",
    showGenericErrorModal: false,
  });

  const fetch = useCallback(
    async (input: GetProductReviewsInputDto) => {
      const result = await get({ ...input });

      return result;
    },
    [get]
  );

  return {
    fetchGetProductReviews: fetch,
  };
};
