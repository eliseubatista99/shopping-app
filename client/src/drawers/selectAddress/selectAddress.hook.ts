import { useFetchUpdateSelectedAddress, type AddressDto } from "@api";
import { useStoreBase } from "@store";
import React from "react";

export const useSelectAddressDrawerHelper = () => {
  const { storeBase, setClientInfo } = useStoreBase();
  const { fetch: fetchUpdateAddress } = useFetchUpdateSelectedAddress();

  const [selectedAddress, setSelectedAddress] = React.useState<
    AddressDto | undefined
  >(storeBase.client?.address);

  const handleAddressSelected = React.useCallback((data: AddressDto) => {
    setSelectedAddress(data);
  }, []);

  const handleOnDrawerClosed = React.useCallback(async () => {
    if (!selectedAddress) {
      return;
    }

    const res = await fetchUpdateAddress({
      address: selectedAddress,
    });

    const clientData = storeBase.client;

    if (!clientData) {
      return;
    }

    clientData.address = res;
    setClientInfo(clientData);
  }, [fetchUpdateAddress, selectedAddress, setClientInfo, storeBase.client]);

  return {
    handleAddressSelected,
    handleOnDrawerClosed,
  };
};
