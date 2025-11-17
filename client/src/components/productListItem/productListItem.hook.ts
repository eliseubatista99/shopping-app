import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

export const useProductListItemHelper = () => {
  const { t } = useAppTranslations();
  const currency = useStoreBase((state) => state.currency);

  const i18n = React.useMemo(() => {
    return {
      tags: {
        bestSeller: t("product.tag.bestSeller"),
        freeShipping: t("product.tag.freeShipping"),
      },
      buttons: {
        addToCart: t("product.actions.addToCart"),
      },
    };
  }, [t]);

  return {
    i18n,
    currency,
  };
};
