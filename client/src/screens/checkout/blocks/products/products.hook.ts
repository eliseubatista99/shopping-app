import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreCheckout } from "@store";
import React from "react";

export const useProductsBlockHelper = () => {
  const { t } = useAppTranslations();
  const products = useStoreCheckout((state) => state.products || []);
  const productCost = useStoreCheckout((state) => state.productCost);
  const shippingCost = useStoreCheckout((state) => state.shippingCost);
  const totalCost = useStoreCheckout((state) => state.totalCost);
  const currency = useStoreBase((state) => state.currency);

  const i18n = React.useMemo(() => {
    return {
      products: t("checkout.payment.costs.products"),
      shipping: t("checkout.payment.costs.shipping"),
      final: t("checkout.payment.costs.final"),
    };
  }, [t]);

  return {
    i18n,
    currency,
    products,
    productCost,
    shippingCost,
    totalCost,
  };
};
