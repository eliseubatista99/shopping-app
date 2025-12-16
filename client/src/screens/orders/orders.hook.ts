import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useStoreOrders } from "@store";
import React from "react";

export const useOrdersPageHelper = () => {
  const [loading, setLoading] = React.useState(true);
  const setStoreOrdersState = useStoreOrders(
    (state) => state.setOrdersStoreState
  );

  const initScreen = React.useCallback(async () => {
    setLoading(true);

    setStoreOrdersState({
      filters: undefined,
      orders: undefined,
    });

    setLoading(false);
  }, [setStoreOrdersState]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
  };
};
