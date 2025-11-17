import { useAppTranslations } from "@hooks";
import React from "react";

export const useProductListItemHelper = () => {
  const { t } = useAppTranslations();

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
  };
};
