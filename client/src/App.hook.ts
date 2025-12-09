import { Api } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useCart } from "@hooks";
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
  const setItemsInCart = useStoreCart((state) => state.setItemsInCart);

  const { fetchClientInfo } = Api.GetClientInfo();
  const { getCart } = useCart();

  const initApp = React.useCallback(async () => {
    if (clientInfo) {
      setIsAppInitialized(true);
      return;
    }

    const [clientInfoRes, cartRes] = await Promise.all([
      fetchClientInfo(),
      getCart(),
    ]);

    setBaseStoreState({
      client: clientInfoRes.data.client,
    });

    setAddresses(clientInfoRes.data.client.addresses || []);
    setPaymentMethods(clientInfoRes.data.client.paymentMethods || []);

    setItemsInCart(cartRes.products);

    setIsAppInitialized(true);
  }, [
    clientInfo,
    fetchClientInfo,
    getCart,
    setAddresses,
    setBaseStoreState,
    setItemsInCart,
    setPaymentMethods,
  ]);

  useDidMount(() => {
    initApp();
  });

  return {
    isAppInitialized,
  };
};
