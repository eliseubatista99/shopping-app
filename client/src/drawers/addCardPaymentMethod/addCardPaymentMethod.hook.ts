import { Api } from "@api";
import type { PaymentMethodFormFields } from "@components";
import { DRAWERS, TOASTS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStorePaymentMethods } from "@store";
import React from "react";

export const useAddCardPaymentMethodDrawerHelper = () => {
  const { t } = useAppTranslations();
  const { fetchAddPaymentMethod } = Api.AddPaymentMethod();
  const { showItem, hideItem } = useFeedback();
  const setPaymentMethods = useStorePaymentMethods(
    (state) => state.setPaymentMethods
  );

  const [canCloseDrawer, setCanCloseDrawer] = React.useState(true);

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.addCardPaymentMethod.title"),
      subtitle: t("drawers.addCardPaymentMethod.subtitle"),
    };
  }, [t]);

  const onClickSubmit = React.useCallback(
    async (data: PaymentMethodFormFields) => {
      setCanCloseDrawer(false);

      const res = await fetchAddPaymentMethod({
        type: "Card",
        name: data.name || "",
        cardNumber: data.cardNumber || "",
        expirationMonth: data.expirationMonth || 0,
        expirationYear: data.expirationYear || 0,
      });

      if (res.metadata.success) {
        setPaymentMethods(res.data.updatedMethods);

        showItem(TOASTS.CLIENT_INFO_CHANGED);

        hideItem(DRAWERS.ADD_CARD_PAYMENT_METHOD);
      }

      setCanCloseDrawer(true);

      return { success: res.metadata.success };
    },
    [fetchAddPaymentMethod, hideItem, setPaymentMethods, showItem]
  );

  return {
    i18n,
    canCloseDrawer,
    onClickSubmit,
  };
};
