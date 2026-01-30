import { PAGES, SEARCH_PARAMS } from "@constants";
import { useAppNavigation, useAppTranslations } from "@hooks";
import { useStoreClient, useStoreForYou, useStoreReviews } from "@store";
import React from "react";

export const useReviewsBlockHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useAppNavigation();

  const setReviewsStoreState = useStoreReviews(
    (state) => state.setReviewsStoreState,
  );
  const clientInfo = useStoreClient((state) => state.client);
  const review = useStoreForYou((state) => state.review);
  const needingReviewProduct = useStoreForYou(
    (state) => state.needingReviewProduct,
  );

  const i18n = React.useMemo(() => {
    return {
      title: t("forYou.reviews.title"),
      seeAll: t("global.actions.seeAll"),
      thoughts: t("forYou.reviews.thoughts"),
    };
  }, [t]);

  const onClickSeeAll = React.useCallback(() => {
    setReviewsStoreState({ reviewerId: clientInfo?.id });
    goTo({
      path: PAGES.MY_REVIEWS,
      addToHistory: true,
    });
  }, [clientInfo?.id, goTo, setReviewsStoreState]);

  const onClickNeedingReview = React.useCallback(() => {
    goTo({
      path: PAGES.WRITE_REVIEW,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: needingReviewProduct?.id,
      },
      addToHistory: true,
    });
  }, [goTo, needingReviewProduct?.id]);

  const onClickReview = React.useCallback(() => {
    goTo({
      path: PAGES.ALL_REVIEWS,
      params: {
        [SEARCH_PARAMS.REVIEW_ID]: review?.id,
        [SEARCH_PARAMS.PRODUCT_ID]: review?.productId,
      },
      addToHistory: true,
    });
  }, [goTo, review?.id, review?.productId]);

  return {
    i18n,
    review,
    needingReviewProduct,
    onClickSeeAll,
    onClickReview,
    onClickNeedingReview,
  };
};
