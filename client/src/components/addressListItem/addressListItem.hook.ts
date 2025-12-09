import { useAppTranslations } from "@hooks";
import React from "react";
import type { AddressListItemProps } from "./addressListItem";

export const useAddressListItemHelper = (props: AddressListItemProps) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      default: t("addressListItem.default"),
      phone: t("addressListItem.phone", { phone: props.address.phone }),
      actions: {
        edit: t("addressListItem.actions.edit"),
        delete: t("addressListItem.actions.delete"),
        setDefault: t("addressListItem.actions.setDefault"),
      },
    };
  }, [props.address.phone, t]);

  return {
    i18n,
    hasActions:
      props.onClickDelete !== undefined ||
      props.onClickEdit !== undefined ||
      props.onClickSetDefault !== undefined,
  };
};
