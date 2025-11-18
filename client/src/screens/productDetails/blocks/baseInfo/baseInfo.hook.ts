import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreProduct } from "@store";
import React from "react";

export const useBaseInfoBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const currency = useStoreBase((state) => state.currency);
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      tags: {
        bestSeller: t("global.tag.bestSeller"),
        freeShipping: t("global.tag.freeShipping"),
      },
      buttons: {
        addToCart: t("global.actions.addToCart.single"),
      },
    };
  }, [t]);

  return {
    i18n,
    product: selectedProduct,
    currency,
  };
};
