import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

export const useCartProductListItemHelper = () => {
  const { t } = useAppTranslations();
  const currency = useStoreBase((state) => state.currency);

  const i18n = React.useMemo(() => {
    return {
      tags: {
        bestSeller: t("global.tag.bestSeller"),
        freeShipping: t("global.tag.freeShipping"),
      },
      buttons: {
        removeFromCart: t("global.actions.removeFromCart.single"),
      },
    };
  }, [t]);

  return {
    i18n,
    currency,
  };
};
