import { useAppTranslations } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useDocumentsBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("productDetails.documents.title"),
    };
  }, [t]);

  return {
    i18n,
    docs: selectedProduct?.documents || [],
  };
};
