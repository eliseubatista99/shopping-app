import { useFetchClientInfo } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useStoreBase, useStoreBasket } from "@store";
import React from "react";

export const useAppHelper = () => {
  const [isAppInitialized, setIsAppInitialized] = React.useState(false);

  const clientInfo = useStoreBase((state) => state.client);
  const setBaseStoreState = useStoreBase((state) => state.setBaseStoreState);
  const setBasketCount = useStoreBasket((state) => state.setBasketCount);

  const { fetchClientInfo } = useFetchClientInfo();

  const initApp = React.useCallback(async () => {
    if (clientInfo) {
      setIsAppInitialized(true);
      return;
    }

    const res = await fetchClientInfo();
    setBaseStoreState({
      client: res.data.client,

      selectedAddress: (res.data.client.addresses || []).find(
        (a) => a.isDefault
      ),
      selectedPaymentMethod: (res.data.client.paymentMethods || []).find(
        (p) => p.isDefault
      ),
    });

    setBasketCount(res.data.itemsInCart);

    setIsAppInitialized(true);
  }, [clientInfo, fetchClientInfo, setBaseStoreState, setBasketCount]);

  useDidMount(() => {
    initApp();
  });

  return {
    isAppInitialized,
  };
};
