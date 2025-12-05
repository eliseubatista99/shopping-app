import { Api, type PaymentMethodDto } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React, { useCallback } from "react";

export const useMethodsListBlockHelper = () => {
  const { t } = useAppTranslations();
  const paymentMethods = useStoreBase((state) => state.client?.paymentMethods);
  const setPaymentMethods = useStoreBase((state) => state.setPaymentMethods);
  const { fetchUpdatePaymentMethod } = Api.UpdatePaymentMethod();
  const { fetchDeletePaymentMethod } = Api.DeletePaymentMethod();
  const { fetchSetDefaultPaymentMethod } = Api.SetDefaultPaymentMethod();

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

  const onClickAdd = useCallback(() => {}, []);

  const onClickEdit = useCallback(
    async (method: PaymentMethodDto) => {
      setLoading(true);
      const res = await fetchUpdatePaymentMethod({ method });

      if (res.metadata.success) {
        setPaymentMethods(res.data.updatedMethods);
      }
      setLoading(false);
    },
    [fetchUpdatePaymentMethod, setPaymentMethods]
  );

  const onClickDelete = useCallback(
    async (method: PaymentMethodDto) => {
      setLoading(true);

      const res = await fetchDeletePaymentMethod({ methodId: method.id });

      if (res.metadata.success) {
        setPaymentMethods(res.data.updatedMethods);
      }
      setLoading(false);
    },
    [fetchDeletePaymentMethod, setPaymentMethods]
  );

  const onClickSetDefault = useCallback(
    async (method: PaymentMethodDto) => {
      setLoading(true);
      const res = await fetchSetDefaultPaymentMethod({ methodId: method.id });

      if (res.metadata.success) {
        setPaymentMethods(res.data.updatedMethods);
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
