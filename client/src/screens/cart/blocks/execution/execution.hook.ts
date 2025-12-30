import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreCart, useStoreCheckout } from "@store";
import React, { useMemo } from "react";

export const useExecutionBlockHelper = () => {
  const { t } = useAppTranslations();
  const currency = useStoreBase((state) => state.currency);
  const products = useStoreCart((state) => state.products);

  const setCheckoutStoreState = useStoreCheckout(
    (state) => state.setCheckoutStoreState
  );

  const { goTo } = useNavigation();

  const selectedProducts = useMemo(
    () => (products || []).filter((p) => p.isSelected),
    [products]
  );

  const i18n = React.useMemo(() => {
    return {
      subtotal: t("cart.execution.subtotal"),
      buy:
        selectedProducts.length < 2
          ? t("cart.execution.buy.single")
          : t("cart.execution.buy.multiple", {
              count: selectedProducts?.length || 0,
            }),
    };
  }, [selectedProducts?.length, t]);

  const productsCosts = useMemo(() => {
    let totalOriginal = 0;
    let total = 0;

    selectedProducts.forEach((p) => {
      total += (p.product?.price || 0) + (p.product?.shippingCost || 0);
      totalOriginal +=
        (p.product?.originalPrice || 0) + (p.product?.shippingCost || 0);
    });

    return { total, totalOriginal };
  }, [selectedProducts]);

  const onClickBuyNow = React.useCallback(() => {
    setCheckoutStoreState({
      products: selectedProducts.map((p) => ({
        product: p.product!,
        quantity: p.quantity || 1,
      })),
    });

    goTo({
      path: PAGES.CHECKOUT,
      addToHistory: true,
    });
  }, [goTo, selectedProducts, setCheckoutStoreState]);

  return {
    i18n,
    products: products || [],
    productsCosts,
    currency,
    onClickBuyNow,
  };
};
