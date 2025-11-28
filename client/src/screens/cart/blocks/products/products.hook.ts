import { useAppTranslations } from "@hooks";
import { useStoreCart } from "@store";
import React from "react";

export const useProductsBlockHelper = () => {
  const { t } = useAppTranslations();
  const products = useStoreCart((state) => state.products);

  const i18n = React.useMemo(() => {
    return {
      title: t("block.title"),
    };
  }, [t]);

  return {
    i18n,
    products,
  };
};
