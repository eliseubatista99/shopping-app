import type { ReviewDto } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

type ReviewWithExpansion = ReviewDto & {
  isExpanded: boolean;
};

export const useReviewsBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
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
    //Do some
  }, []);

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
    //Go to review screen
  }, []);

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
