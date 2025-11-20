import { useAppTranslations } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useProductBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("writeReview.product.title"),
    };
  }, [t]);

  return {
    i18n,
    product: selectedProduct,
  };
};
