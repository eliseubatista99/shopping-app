import { Pages } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useStoreBase, useStoreBasket } from "@store";
import React from "react";
import { useFetchClientInfo } from "src/services";

export const useSplashPageHelper = () => {
  const { fetch: fetchClientInfo } = useFetchClientInfo();
  const { goTo } = useNavigation();
  const { setClientInfo } = useStoreBase();
  const { setBasketCount } = useStoreBasket();

  const initScreen = React.useCallback(async () => {
    const res = await fetchClientInfo();

    if (res) {
      setClientInfo(res.client);
      setBasketCount(res.itemsInBasket);
      goTo(Pages.home, false);
    }
    console.log("ZAU", res);
  }, [fetchClientInfo, goTo, setBasketCount, setClientInfo]);

  useDidMount(() => {
    initScreen();
  });
};
