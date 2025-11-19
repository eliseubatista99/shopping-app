import { useFetchClientInfo } from "@api";
import { Pages } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useStoreBase, useStoreBasket } from "@store";
import React from "react";

export const useSplashPageHelper = () => {
  const { fetch: fetchClientInfo } = useFetchClientInfo();
  const { goTo } = useNavigation();
  const { setClientInfo } = useStoreBase();
  const setBasketCount = useStoreBasket((state) => state.setBasketCount);

  const initScreen = React.useCallback(async () => {
    const res = await fetchClientInfo();

    if (res) {
      setClientInfo(res.client);
      setBasketCount(res.itemsInBasket);
      goTo({ path: Pages.home });
    }
  }, [fetchClientInfo, goTo, setBasketCount, setClientInfo]);

  useDidMount(() => {
    initScreen();
  });
};
