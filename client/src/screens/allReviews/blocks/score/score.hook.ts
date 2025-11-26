import { SortMode, useFetchGetProductReviews } from "@api";
import { DRAWERS, PAGES, SEARCH_PARAMS } from "@constants";
import {
  NumberHelper,
  useDidMount,
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useAppTranslations } from "@hooks";
import { useStoreReviews } from "@store";
import React from "react";

export const useScoreBlockHelper = () => {
  const { t } = useAppTranslations();
  const { reviewId } = useAppSearchParams();
  const { productId } = useAppSearchParams();
  const { fetch: fetchGetProductReviews } = useFetchGetProductReviews();
  const { showItem } = useFeedback();

  const setReviewsStoreState = useStoreReviews(
    (state) => state.setPartialState
  );
  const addReviews = useStoreReviews((state) => state.addReviews);
  const scoreCounts = useStoreReviews((state) => state.scores);
  const averageScore = useStoreReviews((state) => state.averageScore);
  const reviewsCount = useStoreReviews((state) => state.reviewsCount);
  const allReviews = useStoreReviews((state) => state.reviews);
  const scoreFilter = useStoreReviews((state) => state.scoreFilter);
  const sortFilter = useStoreReviews((state) => state.sortFilter);

  const { goTo } = useNavigation();

  const currentPage = React.useRef<number>(0);

  const hasMorePages = React.useRef<boolean>(true);
  const isFetching = React.useRef<boolean>(false);
  const hasRequestedReviewsOnce = React.useRef<boolean>(false);

  const sortFilterCache = React.useRef<SortMode | undefined>(undefined);
  const scoreFilterCache = React.useRef<number | undefined>(undefined);

  const [loading, setLoading] = React.useState<boolean>(false);

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
    //Go to review screen
    goTo({
      path: PAGES.WRITE_REVIEW,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: productId?.value,
      },
    });
  }, [goTo, productId?.value]);

  const onClickFilters = React.useCallback(() => {
    showItem(DRAWERS.REVIEW_FILTERS);
  }, [showItem]);

  const requestReviews = React.useCallback(async () => {
    isFetching.current = true;
    setLoading(true);

    const res = await fetchGetProductReviews({
      productId: productId?.value || "",
      page: currentPage.current,
      pageCount: 10,
      filterByRating: scoreFilter,
      sortMode: sortFilter,
    });

    if (res.metadata.success) {
      if (reviewId.value) {
        res.data.reviews = res.data.reviews.filter(
          (r) => r.id === reviewId.value
        );
      }

      console.log("ZAU", currentPage.current);

      if (currentPage.current < 1) {
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

      hasMorePages.current = res.data.hasMorePages;
    }

    setLoading(false);
    isFetching.current = false;
    hasRequestedReviewsOnce.current = true;
  }, [
    addReviews,
    fetchGetProductReviews,
    productId?.value,
    reviewId.value,
    scoreFilter,
    setReviewsStoreState,
    sortFilter,
  ]);

  const handleRequestTrigger = React.useCallback(
    (visible: boolean) => {
      if (
        visible &&
        !isFetching.current &&
        hasMorePages.current &&
        reviewId.value === undefined &&
        hasRequestedReviewsOnce.current
      ) {
        currentPage.current += 1;
        requestReviews();
      }
    },
    [requestReviews, reviewId]
  );

  React.useEffect(() => {
    if (
      (sortFilterCache.current !== sortFilter ||
        scoreFilterCache.current !== scoreFilter) &&
      hasRequestedReviewsOnce.current
    ) {
      sortFilterCache.current = sortFilter;
      scoreFilterCache.current = scoreFilter;
      currentPage.current = 0;

      requestReviews();
    }
  }, [requestReviews, scoreFilter, sortFilter]);

  useDidMount(() => {
    requestReviews();
  });

  return {
    i18n,
    isInDetailedReview: reviewId.value !== undefined,
    loading,
    scoreBars,
    averageScore,
    reviews: allReviews || [],
    onClickCreateReview,
    handleRequestTrigger,
    onClickFilters,
  };
};
