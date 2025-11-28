import type { CheckoutProductDto } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreCheckout } from "@store";
import React from "react";

export const useProductsBlockHelper = () => {
  const { t } = useAppTranslations();
  const products = useStoreCheckout((state) => state.products);
  const changeProductQuantity = useStoreCheckout(
    (state) => state.changeProductQuantity
  );
  const recalculate = useStoreCheckout((state) => state.recalculate);

  const i18n = React.useMemo(() => {
    return {
      products: t("checkout.payment.costs.products"),
      shipping: t("checkout.payment.costs.shipping"),
      final: t("checkout.payment.costs.final"),
    };
  }, [t]);

  const onChangeProductQuantity = React.useCallback(
    (product: CheckoutProductDto, quantity: number) => {
      changeProductQuantity(product, quantity);
      recalculate();
    },
    [changeProductQuantity, recalculate]
  );

  return {
    i18n,
    products: products || [],
    onChangeProductQuantity,
  };
};
