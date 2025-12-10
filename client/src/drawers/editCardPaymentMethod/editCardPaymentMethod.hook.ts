import { Api } from "@api";
import type { PaymentMethodFormFields } from "@components";
import { DRAWERS, TOASTS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStorePaymentMethods } from "@store";
import React from "react";

export const useEditCardPaymentMethodDrawerHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdatePaymentMethod } = Api.UpdatePaymentMethod();
  const { showItem, hideItem } = useFeedback();

  const paymentMethodInEdit = useStorePaymentMethods(
    (state) => state.paymentMethodInEdit
  );

  const setPaymentMethods = useStorePaymentMethods(
    (state) => state.setPaymentMethods
  );

  const [canCloseDrawer, setCanCloseDrawer] = React.useState(true);

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.editCardPaymentMethod.title"),
    };
  }, [t]);

  const onClickSubmit = React.useCallback(
    async (data: PaymentMethodFormFields) => {
      setCanCloseDrawer(false);

      const res = await fetchUpdatePaymentMethod({
        id: paymentMethodInEdit?.id || "",
        name: data.name || "",
        cardNumber: data.cardNumber || "",
        expirationMonth: data.expirationMonth || 0,
        expirationYear: data.expirationYear || 0,
      });

      if (res.metadata.success) {
        setPaymentMethods(res.data.updatedMethods);

        showItem(TOASTS.CLIENT_INFO_CHANGED);

        hideItem(DRAWERS.EDIT_CARD_PAYMENT_METHOD);
      }

      setCanCloseDrawer(true);

      return { success: res.metadata.success };
    },
    [
      fetchUpdatePaymentMethod,
      hideItem,
      paymentMethodInEdit?.id,
      setPaymentMethods,
      showItem,
    ]
  );

  return {
    i18n,
    canCloseDrawer,
    onClickSubmit,
    paymentMethodInEdit,
  };
};
