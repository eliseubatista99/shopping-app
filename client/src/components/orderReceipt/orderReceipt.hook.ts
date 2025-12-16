import type { ProductDto } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";
import type { OrderReceiptProps } from "./orderReceipt";

export const useOrderReceiptHelper = (props: OrderReceiptProps) => {
  const { t, translateDate } = useAppTranslations();
  const currency = useStoreBase((state) => state.currency);

  const i18n = React.useMemo(() => {
    const lastStatusDateTranslation = translateDate(
      props.order.currentStatus?.date
    );

    return {
      title: t("orderReceipt.title", { name: props.order.id }),
      status: {
        text: t("orderReceipt.status"),
        value: t(
          `global.orderStatus.history.${props.order.currentStatus?.status}`,
          {
            date: lastStatusDateTranslation.orderDate,
          }
        ),
      },
      date: {
        text: t("orderReceipt.date"),
        value: translateDate(props.order.date).extenseDate,
      },
      number: t("orderReceipt.number"),
      details: {
        title: t("orderReceipt.details"),
        product: t("orderReceipt.details.product"),
        price: {
          text: t("orderReceipt.details.price"),
          value: (p: ProductDto) =>
            p.originalPrice ? `${p.originalPrice.toFixed(2)}${currency}` : "",
        },
        shipping: {
          text: t("orderReceipt.details.shipping"),
          value: (p: ProductDto) =>
            p.shippingCost ? `${p.shippingCost.toFixed(2)}${currency}` : "",
        },
        discount: {
          text: t("orderReceipt.details.discount"),
          value: (p: ProductDto) =>
            p.price && p.originalPrice
              ? `${(p.price - p.originalPrice).toFixed(2)}${currency}`
              : "",
        },
        total: {
          text: t("orderReceipt.details.total"),
          value: (p: ProductDto) =>
            p.price ? `${p.price.toFixed(2)}${currency}` : "",
        },
      },
      summary: {
        title: t("orderReceipt.summary.title"),
        products: {
          text: t("orderReceipt.summary.products"),
          value: `${props.order.productsCost.toFixed(2)}${currency}`,
        },
        shipping: {
          text: t("orderReceipt.summary.shipping"),
          value: `${props.order.shippingCost.toFixed(2)}${currency}`,
        },
        discounts: {
          text: t("orderReceipt.summary.discounts"),
          value: `${(-props.order.discounts).toFixed(2)}${currency}`,
        },
        total: {
          text: t("orderReceipt.summary.total"),
          value: `${props.order.totalCost.toFixed(2)}${currency}`,
        },
      },
    };
  }, [
    currency,
    props.order.currentStatus?.date,
    props.order.currentStatus?.status,
    props.order.date,
    props.order.discounts,
    props.order.id,
    props.order.productsCost,
    props.order.shippingCost,
    props.order.totalCost,
    t,
    translateDate,
  ]);

  return { i18n };
};
