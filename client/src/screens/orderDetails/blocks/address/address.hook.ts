import { useAppTranslations } from "@hooks";
import { useStoreOrders } from "@store";
import React from "react";

export const useAddressBlockHelper = () => {
  const { t } = useAppTranslations();
  const selectedOrder = useStoreOrders((state) => state.selectedOrder);

  const i18n = React.useMemo(() => {
    return {
      title: t("orderDetails.address.title"),
    };
  }, [t]);

  return {
    i18n,
    address: selectedOrder?.address,
  };
};
