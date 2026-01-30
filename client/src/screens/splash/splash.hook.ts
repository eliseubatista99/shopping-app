import { PAGES } from "@constants";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { useAppNavigation } from "../../hooks";

export const useSplashPageHelper = () => {
  const { goTo } = useAppNavigation();

  const initScreen = React.useCallback(async () => {
    goTo({ path: PAGES.HOME, addToHistory: false });
  }, [goTo]);

  useDidMount(() => {
    initScreen();
  });
};
