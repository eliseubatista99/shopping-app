import { PAGES } from "@constants";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppNavigation, useAppSearchParams } from "@hooks";
import { useStoreReviews } from "@store";
import React from "react";

export const useReviewsListHelper = () => {
  const { productId } = useAppSearchParams();
  const { reviewId } = useAppSearchParams();
  const reviewerId = useStoreReviews((state) => state.reviewerId);
  const setReviewsStoreState = useStoreReviews(
    (state) => state.setReviewsStoreState,
  );

  const { goTo } = useAppNavigation();

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    setLoading(true);

    if (!productId.value && !reviewId.value && !reviewerId) {
      goTo({ path: PAGES.NOT_FOUND, addToHistory: true });
      return;
    }

    setReviewsStoreState({
      reviews: undefined,
      filters: undefined,
      scores: undefined,
      averageScore: undefined,
    });

    setLoading(false);
  }, [goTo, productId.value, reviewId.value, reviewerId, setReviewsStoreState]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
  };
};
