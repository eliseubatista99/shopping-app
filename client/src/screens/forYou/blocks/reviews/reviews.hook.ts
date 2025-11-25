import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreForYou } from "@store";
import React from "react";

export const useReviewsBlockHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();

  const review = useStoreForYou((state) => state.review);
  const needingReviewProduct = useStoreForYou(
    (state) => state.needingReviewProduct
  );

  const i18n = React.useMemo(() => {
    return {
      title: t("forYou.reviews.title"),
      seeAll: t("global.actions.seeAll"),
      thoughts: t("forYou.reviews.thoughts"),
    };
  }, [t]);

  const onClickSeeAll = React.useCallback(() => {
    goTo({
      path: PAGES.ALL_REVIEWS,
    });
  }, [goTo]);

  const onClickNeedingReview = React.useCallback(() => {
    goTo({
      path: PAGES.WRITE_REVIEW,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: needingReviewProduct?.id,
      },
    });
  }, [goTo, needingReviewProduct?.id]);

  const onClickReview = React.useCallback(() => {
    goTo({
      path: PAGES.ALL_REVIEWS,
      params: {
        [SEARCH_PARAMS.REVIEW_ID]: review?.id,
        [SEARCH_PARAMS.PRODUCT_ID]: review?.productId,
      },
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
