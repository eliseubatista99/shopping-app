import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreCheckout, useStorePaymentMethods } from "@store";
import React from "react";

export const usePaymentBlockHelper = () => {
  const { t, translatePaymentMethod } = useAppTranslations();
  const { showItem } = useFeedback();
  const products = useStoreCheckout((state) => state.products);
  const productCost = useStoreCheckout((state) => state.productCost);
  const shippingCost = useStoreCheckout((state) => state.shippingCost);
  const totalCost = useStoreCheckout((state) => state.totalCost || 0);
  const currency = useStoreBase((state) => state.currency);
  const selectedPaymentMethod = useStorePaymentMethods(
    (state) => state.selectedPaymentMethod
  );
  const wantsFastestOption = useStoreCheckout(
    (state) => state.wantsFastestOption
  );
  const fastestDeliveryCost = useStoreCheckout(
    (state) => state.fastestDeliveryCost || 0
  );
  // const recalculate = useStoreCheckout((state) => state.recalculate);

  const i18n = React.useMemo(() => {
    return {
      products: t("checkout.payment.costs.products"),
      shipping: t("checkout.payment.costs.shipping"),
      fastShipping: t("checkout.payment.costs.fastShipping"),
      final: t("checkout.payment.costs.final"),
      methodName: translatePaymentMethod(selectedPaymentMethod).methodName,

      changeMethod: t("checkout.payment.option.change"),
    };
  }, [selectedPaymentMethod, t, translatePaymentMethod]);

  const onClickChangePayment = React.useCallback(() => {
    showItem(DRAWERS.SELECT_PAYMENT_METHOD);
    //DO SOMETHING
    // recalculate();
  }, [showItem]);

  return {
    i18n,
    currency,
    products,
    productCost,
    shippingCost,
    totalCost,
    selectedPaymentMethod,
    onClickChangePayment,
    wantsFastestOption,
    fastestDeliveryCost,
  };
};
