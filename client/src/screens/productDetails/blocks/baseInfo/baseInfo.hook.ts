import type { ProductOptionDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreProduct } from "@store";
import React from "react";

export const useBaseInfoBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const currency = useStoreBase((state) => state.currency);
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();

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

  const onClickProduct = React.useCallback(
    (product: ProductOptionDto) => {
      goTo({
        path: PAGES.PRODUCT_DETAILS,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: product.id,
        },
        addToHistory: true,
      });
    },
    [goTo]
  );

  return {
    i18n,
    product: selectedProduct,
    currency,
    onClickProduct,
  };
};
