import { Api } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useCart } from "@hooks";
import { useStoreBase, useStoreCart } from "@store";
import React from "react";

export const useAppHelper = () => {
  const [isAppInitialized, setIsAppInitialized] = React.useState(false);

  const clientInfo = useStoreBase((state) => state.client);
  const setBaseStoreState = useStoreBase((state) => state.setBaseStoreState);
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

      selectedAddress: (clientInfoRes.data.client.addresses || []).find(
        (a) => a.isDefault
      ),
      selectedPaymentMethod: (
        clientInfoRes.data.client.paymentMethods || []
      ).find((p) => p.isDefault),
    });

    setItemsInCart(cartRes.products);

    setIsAppInitialized(true);
  }, [clientInfo, fetchClientInfo, getCart, setBaseStoreState, setItemsInCart]);

  useDidMount(() => {
    initApp();
  });

  return {
    isAppInitialized,
  };
};
