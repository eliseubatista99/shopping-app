import { useFetch } from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";
import { ApiConfigs } from "../configs";
import type { ApiOutput, ReviewDto, ScoreCountDto, SortMode } from "../types";

export type GetProductReviewsInputDto = {
  productId: string;
  page: number;
  pageCount: number;
  filterByRating?: number;
  sortMode?: SortMode;
};

export type GetProductReviewsOutputDto = {
  averageScore: number;
  reviewsCount: number;
  scores: ScoreCountDto[];
  reviews: ReviewDto[];
  hasMorePages: boolean;
};

export const useFetchGetProductReviews = () => {
  const { get } = useFetch();

  const fetch = useCallback(
    async (input: GetProductReviewsInputDto) => {
      const result = await get<ApiOutput<GetProductReviewsOutputDto>>(
        `${ApiConfigs.endpoint}/GetProductReviews`,
        { ...input }
      );

      return result;
    },
    [get]
  );

  return {
    fetch,
  };
};
