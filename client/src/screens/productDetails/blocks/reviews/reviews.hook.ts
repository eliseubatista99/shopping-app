import type { ReviewDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreProduct, useStoreReviews } from "@store";
import React from "react";

type ReviewWithExpansion = ReviewDto & {
  isExpanded: boolean;
};

export const useReviewsBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const setReviewsStoreState = useStoreReviews(
    (state) => state.setReviewsStoreState
  );
  const { goTo } = useNavigation();
  const { t } = useAppTranslations();

  const [reviews, setReviews] = React.useState<ReviewWithExpansion[]>([]);

  const i18n = React.useMemo(() => {
    return {
      title: t("productDetails.reviews.title"),
      globalReviews: {
        title: t("productDetails.reviews.title"),
        count: t("productDetails.reviews.count", {
          count: selectedProduct?.scoreCount,
        }),
      },
      reviews: {
        expand: t("productDetails.reviews.expand"),
        seeAll: t("productDetails.reviews.seeAll"),
        create: t("productDetails.reviews.create"),
      },
    };
  }, [selectedProduct, t]);

  const onClickSeeAll = React.useCallback(() => {
    goTo({
      path: PAGES.ALL_REVIEWS,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: selectedProduct?.id,
      },
    });
  }, [goTo, selectedProduct?.id]);

  const onClickExpand = React.useCallback((review: ReviewDto) => {
    setReviews((prevState) =>
      prevState.map((r) => {
        if (r.id === review.id) {
          return { ...r, isExpanded: true };
        } else {
          return r;
        }
      })
    );
  }, []);

  const onClickCreateReview = React.useCallback(() => {
    setReviewsStoreState({
      productId: selectedProduct?.id,
      productName: selectedProduct?.name,
      productImage: selectedProduct?.image,
    });

    //Go to review screen
    goTo({
      path: PAGES.WRITE_REVIEW,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: selectedProduct?.id,
      },
    });
  }, [
    goTo,
    selectedProduct?.id,
    selectedProduct?.image,
    selectedProduct?.name,
    setReviewsStoreState,
  ]);

  const initializeReviews = React.useCallback(() => {
    const data = (selectedProduct?.reviews || []).map(
      (r): ReviewWithExpansion => ({
        ...r,
        isExpanded: false,
      })
    );

    setReviews(data);
  }, [selectedProduct?.reviews]);

  useDidMount(() => {
    initializeReviews();
  });

  return {
    i18n,
    score: {
      value: selectedProduct?.score || 0,
      count: selectedProduct?.scoreCount || 0,
    },
    reviews,
    onClickCreateReview,
    onClickSeeAll,
    onClickExpand,
  };
};
