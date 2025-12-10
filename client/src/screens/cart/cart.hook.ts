import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useStoreAuthentication, useStoreCart } from "@store";
import { useCallback } from "react";

export const useCartPageHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );

  const setCartStoreState = useStoreCart((state) => state.setCartStoreState);
  // const { goTo } = useNavigation();

  const initScreen = useCallback(async () => {
    setCartStoreState({ products: [] });
  }, [setCartStoreState]);

  useDidMount(() => {
    initScreen();
  });

  return {
    isAuthenticated,
  };
};
