import { useAppReceipts, useAppTranslations } from "@hooks";
import { useStoreOrders } from "@store";
import React from "react";

export const useDetailsBlockHelper = () => {
  const { t, translateDate } = useAppTranslations();
  const appReceipts = useAppReceipts();
  const selectedOrder = useStoreOrders((state) => state.selectedOrder);

  const i18n = React.useMemo(() => {
    const translatedDate = translateDate(selectedOrder?.date);

    return {
      title: t("orderDetails.details.title"),
      date: {
        text: t("orderDetails.details.date"),
        value: translatedDate.extenseDate,
      },
      receipt: t("orderDetails.details.receipt"),
    };
  }, [selectedOrder?.date, t, translateDate]);

  const downloadReceipt = React.useCallback(() => {
    if (selectedOrder) {
      appReceipts.previewReceipt(selectedOrder);
    }
  }, [appReceipts, selectedOrder]);

  return {
    i18n,
    selectedOrder,
    downloadReceipt,
  };
};
