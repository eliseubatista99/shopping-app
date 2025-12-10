import { Api } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import {
  useStoreAddresses,
  useStoreBase,
  useStoreCart,
  useStorePaymentMethods,
} from "@store";
import React from "react";

export const useAppHelper = () => {
  const [isAppInitialized, setIsAppInitialized] = React.useState(false);

  const clientInfo = useStoreBase((state) => state.client);
  const setBaseStoreState = useStoreBase((state) => state.setBaseStoreState);
  const setPaymentMethods = useStorePaymentMethods(
    (state) => state.setPaymentMethods
  );
  const setAddresses = useStoreAddresses((state) => state.setAddresses);
  const setCartCount = useStoreCart((state) => state.setCartCount);

  const { fetchClientInfo } = Api.GetClientInfo();

  const initApp = React.useCallback(async () => {
    if (clientInfo) {
      setIsAppInitialized(true);
      return;
    }

    const [clientInfoRes] = await Promise.all([fetchClientInfo()]);

    setBaseStoreState({
      client: clientInfoRes.data.client,
    });

    setAddresses(clientInfoRes.data.client.addresses || []);
    setPaymentMethods(clientInfoRes.data.client.paymentMethods || []);

    setCartCount(clientInfoRes.data.itemsInCart || 0);

    setIsAppInitialized(true);
  }, [
    clientInfo,
    fetchClientInfo,
    setAddresses,
    setBaseStoreState,
    setCartCount,
    setPaymentMethods,
  ]);

  useDidMount(() => {
    initApp();
  });

  return {
    isAppInitialized,
  };
};
