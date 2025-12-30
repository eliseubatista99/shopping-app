import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreOrders } from "@store";
import React from "react";

export const useSummaryBlockHelper = () => {
  const { t } = useAppTranslations();
  const currency = useStoreBase((state) => state.currency);
  const selectedOrder = useStoreOrders((state) => state.selectedOrder);

  const i18n = React.useMemo(() => {
    return {
      title: t("orderDetails.summary.title"),
      costs: {
        products: {
          text: t("orderDetails.summary.costs.products.text"),
          value: `${selectedOrder?.productCost}${currency}`,
        },
        shipping: {
          text: t("orderDetails.summary.costs.shipping.text"),
          value: selectedOrder?.shippingCost
            ? `${selectedOrder?.shippingCost}${currency}`
            : t("orderDetails.summary.costs.shipping.free"),
        },
        discounts: {
          text: t("orderDetails.summary.costs.discounts.text"),
          value: `-${selectedOrder?.discounts}${currency}`,
        },
        total: {
          text: t("orderDetails.summary.costs.total.text"),
          value: `${selectedOrder?.totalCost}${currency}`,
        },
        vat: t("orderDetails.summary.vatIncluded"),
      },
    };
  }, [
    currency,
    selectedOrder?.discounts,
    selectedOrder?.productCost,
    selectedOrder?.shippingCost,
    selectedOrder?.totalCost,
    t,
  ]);

  return {
    i18n,
    address: selectedOrder?.address,
  };
};
