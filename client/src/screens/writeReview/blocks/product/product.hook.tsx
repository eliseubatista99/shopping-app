import { useAppTranslations } from "@hooks";
import { useStoreReviews } from "@store";
import React from "react";

export const useProductBlockHelper = () => {
  const productImage = useStoreReviews((state) => state.productImage);
  const productName = useStoreReviews((state) => state.productName);
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("writeReview.product.title"),
    };
  }, [t]);

  return {
    i18n,
    productImage,
    productName,
  };
};
