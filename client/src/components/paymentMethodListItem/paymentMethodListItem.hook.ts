import { useAppTranslations } from "@hooks";
import React from "react";
import type { PaymentMethodListItemProps } from "./paymentMethodListItem";

export const usePaymentMethodListItemHelper = (
  props: PaymentMethodListItemProps
) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      default: t("paymentMethodListItem.default"),
      actions: {
        edit: t("paymentMethodListItem.actions.edit"),
        delete: t("paymentMethodListItem.actions.delete"),
        setDefault: t("paymentMethodListItem.actions.setDefault"),
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
