import { DRAWERS, PAGES, SEARCH_PARAMS } from "@constants";
import {
  NumberHelper,
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import {
  useAppSearchParams,
  useAppTranslations,
  useAuthentication,
} from "@hooks";
import { useStoreReviews } from "@store";
import React from "react";

export const useAllReviewsPageHelper = () => {
  const { isAuthenticated } = useAuthentication();
  const { reviewId, productId } = useAppSearchParams();
  const averageScore = useStoreReviews((state) => state.averageScore);
  const reviewsCount = useStoreReviews((state) => state.reviewsCount);
  const scoreCounts = useStoreReviews((state) => state.scores);

  const setReviewsStoreState = useStoreReviews(
    (state) => state.setReviewsStoreState
  );
  const { showItem } = useFeedback();
  const { goTo } = useNavigation();

  const { t } = useAppTranslations();

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
    isInDetailedReview: reviewId.value !== undefined,
    i18n,
    scoreBars,
    averageScore,
    onClickCreateReview,
    onClickFilters,
    onClickScore,
  };
};
