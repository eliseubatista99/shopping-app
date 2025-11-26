import { useAppTranslations } from "@hooks";
import React from "react";
import type { OrderListItemProps } from "./orderListItem";

export const useOrderListItemHelper = ({ order }: OrderListItemProps) => {
  const { t, translateDate } = useAppTranslations();

  const i18n = React.useMemo(() => {
    const lastStatusDateTranslation = translateDate(order.currentStatus?.date);

    return {
      status: t(`global.orderStatus.history.${order.currentStatus?.status}`, {
        date: lastStatusDateTranslation.orderDate,
      }),
    };
  }, [order, t, translateDate]);

  return { i18n };
};
