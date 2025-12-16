import { Api } from "@api";
import { useAppSearchParams } from "@hooks";
import { useStoreReviews, type ReviewsFilters } from "@store";
import React from "react";

export const useScoreBlockHelper = () => {
  const { reviewId } = useAppSearchParams();
  const { productId } = useAppSearchParams();
  const { fetchGetProductReviews } = Api.GetProductReviews();

  const setReviewsStoreState = useStoreReviews(
    (state) => state.setReviewsStoreState
  );
  const authorId = useStoreReviews((state) => state.reviewerId);
  const addReviews = useStoreReviews((state) => state.addReviews);
  const allReviews = useStoreReviews((state) => state.reviews);
  const storeFilters = useStoreReviews((state) => state.filters);

  const retrieveItems = React.useCallback(
    async (currentPage: number, pageSize: number, filters?: object) => {
      const parsedFilters = filters as ReviewsFilters | undefined;

      const res = await fetchGetProductReviews({
        productId: productId?.value,
        authorId: authorId,
        reviewId: reviewId.value,
        page: currentPage,
        pageCount: pageSize,
        filterByRating: parsedFilters?.scoreFilter,
        sortMode: parsedFilters?.sortFilter,
      });

      if (res.metadata.success) {
        if (currentPage < 1) {
          setReviewsStoreState({
            scores: res.data.scores,
            averageScore: res.data.averageScore,
            productId: res.data.productId,
            productName: res.data.productName,
            reviewsCount: res.data.reviewsCount,
            reviews: res.data.reviews,
          });
        } else {
          addReviews(res.data.reviews);
        }
      }

      return {
        success: res.metadata.success,
        hasMorePages: res.data?.hasMorePages,
      };
    },
    [
      addReviews,
      authorId,
      fetchGetProductReviews,
      productId?.value,
      reviewId.value,
      setReviewsStoreState,
    ]
  );

  return {
    reviews: allReviews || [],
    retrieveItems,
    storeFilters,
  };
};
