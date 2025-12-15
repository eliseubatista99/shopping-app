import { Api } from "@api";
import { DRAWERS, PAGES, SEARCH_PARAMS } from "@constants";
import {
  NumberHelper,
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useAppTranslations } from "@hooks";
import {
  useStoreAuthentication,
  useStoreReviews,
  type ReviewsFilters,
} from "@store";
import React from "react";

export const useScoreBlockHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const { t } = useAppTranslations();
  const { reviewId } = useAppSearchParams();
  const { productId } = useAppSearchParams();
  const { fetchGetProductReviews } = Api.GetProductReviews();
  const { showItem } = useFeedback();

  const setReviewsStoreState = useStoreReviews(
    (state) => state.setReviewsStoreState
  );
  const addReviews = useStoreReviews((state) => state.addReviews);
  const scoreCounts = useStoreReviews((state) => state.scores);
  const averageScore = useStoreReviews((state) => state.averageScore);
  const reviewsCount = useStoreReviews((state) => state.reviewsCount);
  const allReviews = useStoreReviews((state) => state.reviews);
  const storeFilters = useStoreReviews((state) => state.filters);

  const { goTo } = useNavigation();

  const i18n = React.useMemo(() => {
    return {
      title: t("allReviews.score.title"),
      filters: t("global.filters"),
      count: t("allReviews.score.count", {
        count: reviewsCount,
      }),
      create: t("allReviews.score.create"),
    };
  }, [reviewsCount, t]);

  const scoreBars = React.useMemo(() => {
    const totalScoreCount = reviewsCount || 0;

    return (scoreCounts || []).map((s) => ({
      score: s.score,
      percentage: NumberHelper.clamp((s.count / totalScoreCount) * 100, 0, 100),
    }));
  }, [reviewsCount, scoreCounts]);

  const retrieveItems = React.useCallback(
    async (currentPage: number, pageSize: number, filters?: object) => {
      const parsedFilters = filters as ReviewsFilters | undefined;

      const res = await fetchGetProductReviews({
        productId: productId?.value || "",
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
    [addReviews, fetchGetProductReviews, productId?.value, setReviewsStoreState]
  );

  const onClickCreateReview = React.useCallback(() => {
    if (isAuthenticated) {
      //Go to review screen
      goTo({
        path: PAGES.WRITE_REVIEW,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: productId?.value,
        },
      });
    } else {
      goTo({
        path: PAGES.LOG_IN,
      });
    }
  }, [goTo, isAuthenticated, productId?.value]);

  const onClickFilters = React.useCallback(() => {
    showItem(DRAWERS.REVIEW_FILTERS);
  }, [showItem]);

  const onClickScore = React.useCallback(
    (score: number) => {
      setReviewsStoreState({ filters: { scoreFilter: score } });
    },
    [setReviewsStoreState]
  );

  return {
    i18n,
    isInDetailedReview: reviewId.value !== undefined,
    scoreBars,
    averageScore,
    reviews: allReviews || [],
    onClickCreateReview,
    onClickFilters,
    retrieveItems,
    storeFilters,
    onClickScore,
  };
};
