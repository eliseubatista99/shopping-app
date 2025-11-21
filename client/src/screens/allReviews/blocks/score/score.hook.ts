import { useAppTranslations } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useScoreBlockHelper = () => {
  const { t } = useAppTranslations();
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);

  const i18n = React.useMemo(() => {
    return {
      title: t("allReviews.score.title"),
      count: t("allReviews.score.count", {
        count: selectedProduct?.scoreCount,
      }),
    };
  }, [selectedProduct?.scoreCount, t]);

  return {
    i18n,
    product: selectedProduct,
  };
};
