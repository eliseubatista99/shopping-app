import { Api } from "@api";
import type { AddressFormFields } from "@components";
import { DRAWERS, TOASTS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreAddresses } from "@store";
import React from "react";

export const useAddAddressDrawerHelper = () => {
  const { t } = useAppTranslations();
  const { fetchAddAddress } = Api.AddAddress();
  const { showItem, hideItem } = useFeedback();
  const setAddresses = useStoreAddresses((state) => state.setAddresses);

  const [canCloseDrawer, setCanCloseDrawer] = React.useState(true);

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.addAddress.title"),
    };
  }, [t]);

  const onClickSubmit = React.useCallback(
    async (data: AddressFormFields) => {
      setCanCloseDrawer(false);

      const res = await fetchAddAddress({
        name: data.name || "",
        postalCode: data.postalCode || "",
        city: data.city || "",
        street: data.street || "",
        country: data.country || "",
        isDefault: data.setDefault || false,
      });

      if (res.metadata.success) {
        setAddresses(res.data.updatedAddresses);

        showItem(TOASTS.CLIENT_INFO_CHANGED);

        hideItem(DRAWERS.ADD_ADDRESS);
      }

      setCanCloseDrawer(true);

      return {
        success: res.metadata.success,
      };
    },
    [fetchAddAddress, hideItem, setAddresses, showItem]
  );

  return {
    i18n,
    onClickSubmit,
    canCloseDrawer,
  };
};
