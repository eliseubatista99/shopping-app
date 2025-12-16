import { useAppTranslations } from "@hooks";
import { useStoreOrders } from "@store";
import React from "react";

export const usePaymentBlockHelper = () => {
  const { t, translatePaymentMethod } = useAppTranslations();
  const selectedOrder = useStoreOrders((state) => state.selectedOrder);

  const i18n = React.useMemo(() => {
    return {
      title: t("orderDetails.paymentMethod.title"),
      methodName: translatePaymentMethod(selectedOrder?.paymentMethod)
        .methodName,
    };
  }, [selectedOrder?.paymentMethod, t, translatePaymentMethod]);

  return {
    i18n,
    paymentMethod: selectedOrder?.paymentMethod,
  };
};
