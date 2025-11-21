import { PAGES, SEARCH_PARAMS } from "@constants";
import {
  NumberHelper,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useScoreBlockHelper = () => {
  const { t } = useAppTranslations();
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const scoreCounts = useStoreProduct((state) => state.scoreCounts);
  const allReviews = useStoreProduct((state) => state.allReviews);
  const { goTo } = useNavigation();

  const i18n = React.useMemo(() => {
    return {
      title: t("allReviews.score.title"),
      count: t("allReviews.score.count", {
        count: selectedProduct?.scoreCount,
      }),
      create: t("allReviews.score.create"),
    };
  }, [selectedProduct?.scoreCount, t]);

  const scoreBars = React.useMemo(() => {
    const totalScoreCount = selectedProduct?.scoreCount || 0;

    return (scoreCounts || []).map((s) => ({
      score: s.score,
      percentage: NumberHelper.clamp((s.count / totalScoreCount) * 100, 0, 100),
    }));
  }, [scoreCounts, selectedProduct?.scoreCount]);

  const onClickCreateReview = React.useCallback(() => {
    //Go to review screen
    goTo({
      path: PAGES.WRITE_REVIEW,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: selectedProduct?.id,
      },
    });
  }, [goTo, selectedProduct?.id]);

  return {
    i18n,
    scoreBars,
    product: selectedProduct,
    reviews: allReviews || [],
    onClickCreateReview,
  };
};
