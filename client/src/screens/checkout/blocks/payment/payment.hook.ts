import { PaymentMethodType } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreCheckout } from "@store";
import React from "react";

export const usePaymentBlockHelper = () => {
  const { t } = useAppTranslations();
  const products = useStoreCheckout((state) => state.products);
  const productCost = useStoreCheckout((state) => state.productCost);
  const shippingCost = useStoreCheckout((state) => state.shippingCost);
  const totalCost = useStoreCheckout((state) => state.totalCost || 0);
  const currency = useStoreBase((state) => state.currency);
  const selectedPaymentMethod = useStoreBase(
    (state) => state.selectedPaymentMethod
  );
  const wantsFastestOption = useStoreCheckout(
    (state) => state.wantsFastestOption
  );
  const fastestDeliveryCost = useStoreCheckout(
    (state) => state.fastestDeliveryCost || 0
  );
  const recalculate = useStoreCheckout((state) => state.recalculate);

  const i18n = React.useMemo(() => {
    const cardNum = selectedPaymentMethod?.cardNumber
      ?.replaceAll("*", "")
      .trim();

    const network = t(`global.card.network.${selectedPaymentMethod?.network}`);

    return {
      products: t("checkout.payment.costs.products"),
      shipping: t("checkout.payment.costs.shipping"),
      fastShipping: t("checkout.payment.costs.fastShipping"),
      final: t("checkout.payment.costs.final"),
      methodName:
        selectedPaymentMethod?.type === PaymentMethodType.Card
          ? t("checkout.payment.option.card.name", {
              name: network,
              card: cardNum,
            })
          : t("checkout.payment.option.bank.name", {
              name: selectedPaymentMethod?.name,
            }),

      changeMethod: t("checkout.payment.option.change"),
    };
  }, [
    selectedPaymentMethod?.cardNumber,
    selectedPaymentMethod?.name,
    selectedPaymentMethod?.network,
    selectedPaymentMethod?.type,
    t,
  ]);

  const onClickChangePayment = React.useCallback(() => {
    //DO SOMETHING
    recalculate();
  }, [recalculate]);

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
