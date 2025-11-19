import { useFetchClientInfo } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useStoreBase, useStoreBasket } from "@store";
import React from "react";

export const useAppHelper = () => {
  const [isAppInitialized, setIsAppInitialized] = React.useState(false);

  const clientInfo = useStoreBase((state) => state.client);
  const setClientInfo = useStoreBase((state) => state.setClientInfo);
  const setBasketCount = useStoreBasket((state) => state.setBasketCount);

  const { fetch: fetchClientInfo } = useFetchClientInfo();

  const initApp = React.useCallback(async () => {
    if (clientInfo) {
      setIsAppInitialized(true);
      return;
    }

    const res = await fetchClientInfo();
    setClientInfo(res.data.client);
    setBasketCount(res.data.itemsInCart);

    setIsAppInitialized(true);
  }, [clientInfo, fetchClientInfo, setBasketCount, setClientInfo]);

  useDidMount(() => {
    initApp();
  });

  return {
    isAppInitialized,
  };
};
