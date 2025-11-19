import { Pages } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";

export const useSplashPageHelper = () => {
  const { goTo } = useNavigation();

  const initScreen = React.useCallback(async () => {
    goTo({ path: Pages.home });
  }, [goTo]);

  useDidMount(() => {
    initScreen();
  });
};
