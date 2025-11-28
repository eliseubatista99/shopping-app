import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useCart } from "@hooks";
import React from "react";

export const useCartPageHelper = () => {
  const [loading, setLoading] = React.useState(true);

  const { getCart } = useCart();

  const initScreen = React.useCallback(async () => {
    setLoading(true);
    await getCart();
    setLoading(false);
  }, [getCart]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
  };
};
