import type { PaymentMethodDto } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React, { useCallback } from "react";

export const useMethodsListBlockHelper = () => {
  const { t } = useAppTranslations();
  const paymentMethods = useStoreBase((state) => state.client?.paymentMethods);

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

  const onClickEdit = useCallback((method: PaymentMethodDto) => {}, []);

  const onClickDelete = useCallback((method: PaymentMethodDto) => {}, []);

  const onClickSetDefault = useCallback((method: PaymentMethodDto) => {}, []);

  return {
    i18n,
    paymentMethods: paymentMethods || [],
    onClickAdd,
    onClickEdit,
    onClickDelete,
    onClickSetDefault,
  };
};
