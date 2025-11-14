import {
  useFetchUpdateSelectedAddress,
  type AddressDto,
  type ClientInfoDto,
} from "@api";
import { Drawers } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";

export const useSelectAddressDrawerHelper = () => {
  const { hideItem } = useFeedback();
  const { storeBase, setClientInfo } = useStoreBase();
  const { fetch: fetchUpdateAddress } = useFetchUpdateSelectedAddress();
  const { t } = useAppTranslations();
  const [loading, setLoading] = React.useState<boolean>(false);

  const [selectedAddress, setSelectedAddress] = React.useState<
    AddressDto | undefined
  >(storeBase.client?.addresses.find((a) => a.isSelected));

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
    if (!selectedAddress || !storeBase.client) {
      return;
    }

    setLoading(true);
    const clientData: ClientInfoDto = { ...storeBase.client };

    if (!clientData) {
      return;
    }

    const res = await fetchUpdateAddress({
      address: selectedAddress,
    });

    clientData.addresses = res.updatedAddresses || [];
    setClientInfo(clientData);

    setLoading(false);

    hideItem(Drawers.selectAddress);
  }, [
    fetchUpdateAddress,
    hideItem,
    selectedAddress,
    setClientInfo,
    storeBase.client,
  ]);

  return {
    i18n,
    loading,
    handleAddressSelected,
    handleSubmit,
    selectedAddress,
    addresses: storeBase.client?.addresses,
  };
};
