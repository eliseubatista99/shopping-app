import { useAppTranslations } from "@hooks";
import React from "react";
import type { PaymentMethodListItemProps } from "./paymentMethodListItem";

export const usePaymentMethodListItemHelper = (
  props: PaymentMethodListItemProps
) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      default: t("paymentMethods.default"),
      actions: {
        edit: t("paymentMethods.actions.edit"),
        delete: t("paymentMethods.actions.delete"),
        setDefault: t("paymentMethods.actions.setDefault"),
      },
    };
  }, [t]);

  return {
    i18n,
    hasActions:
      props.onClickDelete !== undefined ||
      props.onClickEdit !== undefined ||
      props.onClickSetDefault !== undefined,
  };
};
