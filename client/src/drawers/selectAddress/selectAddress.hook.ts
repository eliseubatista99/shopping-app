import { Api, type AddressDto, type ClientInfoDto } from "@api";
import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreAddresses, useStoreClient } from "@store";
import React from "react";

export const useSelectAddressDrawerHelper = () => {
  const { hideItem } = useFeedback();
  const setClientInfo = useStoreClient((state) => state.setClientInfo);
  const storeClient = useStoreClient((state) => state.client);
  const selectedAddressInStore = useStoreAddresses(
    (state) => state.selectedAddress
  );
  const addresses = useStoreAddresses((state) => state.addresses);
  const setAddresses = useStoreAddresses((state) => state.setAddresses);

  const { fetchSetDefaultAddress } = Api.SetDefaultAddress();
  const { t } = useAppTranslations();
  const [loading, setLoading] = React.useState<boolean>(false);

  const [selectedAddress, setSelectedAddress] = React.useState<
    AddressDto | undefined
  >(selectedAddressInStore);

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.selectAddress.title"),
      subtitle: t("drawers.selectAddress.subtitle"),
      button: t("drawers.selectAddress.button"),
    };
  }, [t]);

  const handleAddressSelected = React.useCallback((data: AddressDto) => {
    setSelectedAddress(data);
  }, []);

  const handleSubmit = React.useCallback(async () => {
    if (!selectedAddress || !storeClient) {
      return;
    }

    setLoading(true);
    const clientData: ClientInfoDto = { ...storeClient };

    if (!clientData) {
      return;
    }

    const res = await fetchSetDefaultAddress({
      addressId: selectedAddress.id || "",
    });

    clientData.addresses = res.data.updatedAddresses || [];
    setClientInfo(clientData);
    setAddresses(res.data.updatedAddresses);

    setSelectedAddress(res.data.updatedAddresses.find((a) => a.isDefault));

    setLoading(false);

    hideItem(DRAWERS.SELECT_ADDRESS);
  }, [
    fetchSetDefaultAddress,
    hideItem,
    selectedAddress,
    setAddresses,
    setClientInfo,
    storeClient,
  ]);

  return {
    i18n,
    loading,
    handleAddressSelected,
    handleSubmit,
    selectedAddress,
    addresses,
  };
};
