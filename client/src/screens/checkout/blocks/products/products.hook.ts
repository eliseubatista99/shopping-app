import { useAppTranslations } from "@hooks";
import { useStoreCheckout } from "@store";
import React from "react";

export const useProductsBlockHelper = () => {
  const { t } = useAppTranslations();
  const products = useStoreCheckout((state) => state.products || []);

  const i18n = React.useMemo(() => {
    return {
      products: t("checkout.payment.costs.products"),
      shipping: t("checkout.payment.costs.shipping"),
      final: t("checkout.payment.costs.final"),
    };
  }, [t]);

  return {
    i18n,
    products,
  };
};
