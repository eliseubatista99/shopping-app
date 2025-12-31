import { ApiEndpoints, type PaymentMethodDto } from "@api";
import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStorePaymentMethods } from "@store";
import React, { useCallback } from "react";

export const usePaymentMethodsPageHelper = () => {
  const { t } = useAppTranslations();
  const paymentMethods = useStorePaymentMethods(
    (state) => state?.paymentMethods
  );
  const setStorePaymentMethodsState = useStorePaymentMethods(
    (state) => state.setStorePaymentMethodsState
  );

  const setPaymentMethods = useStorePaymentMethods(
    (state) => state.setPaymentMethods
  );

  const { fetchDeletePaymentMethod } = ApiEndpoints.DeletePaymentMethod();
  const { fetchSetDefaultPaymentMethod } =
    ApiEndpoints.SetDefaultPaymentMethod();
  const { showItem } = useFeedback();

  const [loading, setLoading] = React.useState<boolean>(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("paymentMethods.title"),
      default: t("paymentMethods.default"),
      actions: {
        add: t("paymentMethods.actions.add"),
        edit: t("paymentMethods.actions.edit"),
        delete: t("paymentMethods.actions.delete"),
        setDefault: t("paymentMethods.actions.setDefault"),
      },
    };
  }, [t]);

  const onClickAdd = useCallback(() => {
    showItem(DRAWERS.ADD_CARD_PAYMENT_METHOD);
  }, [showItem]);

  const onClickEdit = useCallback(
    async (method: PaymentMethodDto) => {
      setStorePaymentMethodsState({ paymentMethodInEdit: method });
      showItem(DRAWERS.EDIT_CARD_PAYMENT_METHOD);
    },
    [setStorePaymentMethodsState, showItem]
  );

  const onClickDelete = useCallback(
    async (method: PaymentMethodDto) => {
      setLoading(true);

      const res = await fetchDeletePaymentMethod({ methodId: method.id || "" });

      if (res.metadata?.success) {
        setPaymentMethods(res.data?.updatedMethods || []);
      }
      setLoading(false);
    },
    [fetchDeletePaymentMethod, setPaymentMethods]
  );

  const onClickSetDefault = useCallback(
    async (method: PaymentMethodDto) => {
      setLoading(true);
      const res = await fetchSetDefaultPaymentMethod({
        methodId: method.id || "",
      });

      if (res.metadata?.success) {
        setPaymentMethods(res.data?.updatedMethods || []);
      }
      setLoading(false);
    },
    [fetchSetDefaultPaymentMethod, setPaymentMethods]
  );

  return {
    i18n,
    paymentMethods: paymentMethods || [],
    onClickAdd,
    onClickEdit,
    onClickDelete,
    onClickSetDefault,
    loading,
  };
};
