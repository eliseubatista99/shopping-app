import { ApiEndpoints, type AddressDto } from "@api";
import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreAddresses } from "@store";
import React, { useCallback } from "react";

export const useAddressesPageHelper = () => {
  const { t } = useAppTranslations();
  const addresses = useStoreAddresses((state) => state?.addresses);
  const setStoreAddressesState = useStoreAddresses(
    (state) => state.setStoreAddressesState
  );

  const setAddresses = useStoreAddresses((state) => state.setAddresses);

  const { fetchDeleteAddress } = ApiEndpoints.DeleteAddress();
  const { fetchSetDefaultAddress } = ApiEndpoints.SetDefaultAddress();
  const { showItem } = useFeedback();

  const [loading, setLoading] = React.useState<boolean>(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("addresses.title"),
      default: t("addresses.default"),
      actions: {
        add: t("addresses.actions.add"),
        edit: t("addresses.actions.edit"),
        delete: t("addresses.actions.delete"),
        setDefault: t("addresses.actions.setDefault"),
      },
    };
  }, [t]);

  const onClickAdd = useCallback(() => {
    showItem(DRAWERS.ADD_ADDRESS);
  }, [showItem]);

  const onClickEdit = useCallback(
    async (address: AddressDto) => {
      setStoreAddressesState({ addressInEdit: address });
      showItem(DRAWERS.EDIT_ADDRESS);
    },
    [setStoreAddressesState, showItem]
  );

  const onClickDelete = useCallback(
    async (address: AddressDto) => {
      setLoading(true);

      const res = await fetchDeleteAddress({ addressId: address.id || "" });

      if (res.metadata?.success) {
        setAddresses(res.data?.updatedAddresses || []);
      }
      setLoading(false);
    },
    [fetchDeleteAddress, setAddresses]
  );

  const onClickSetDefault = useCallback(
    async (address: AddressDto) => {
      setLoading(true);
      const res = await fetchSetDefaultAddress({ addressId: address.id || "" });

      if (res.metadata?.success) {
        setAddresses(res.data?.updatedAddresses || []);
      }
      setLoading(false);
    },
    [fetchSetDefaultAddress, setAddresses]
  );

  return {
    i18n,
    addresses: addresses || [],
    onClickAdd,
    onClickEdit,
    onClickDelete,
    onClickSetDefault,
    loading,
  };
};
