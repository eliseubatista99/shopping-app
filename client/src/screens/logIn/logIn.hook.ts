import { PAGES } from "@constants";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import {
  useAppNavigation,
  useAppSearchParams,
  useAuthentication,
} from "@hooks";
import { useCallback, useState } from "react";

export const useLogInPageHelper = () => {
  const { goTo } = useAppNavigation();

  const { allParams, returnPage } = useAppSearchParams();
  const { isAuthenticated } = useAuthentication();
  const [initialized, setInitialized] = useState(false);

  const initScreen = useCallback(() => {
    if (isAuthenticated) {
      goTo({
        path: PAGES.HOME,
        params: {
          ...allParams.value,
        },
        addToHistory: false,
      });
    } else {
      setInitialized(true);
    }
  }, [allParams, goTo, isAuthenticated]);

  const onClickBack = useCallback(() => {
    const path = returnPage.value || PAGES.SIGN_UP_OR_LOGIN;

    goTo({
      path: path,
      params: {
        ...allParams.value,
      },
      addToHistory: false,
    });
  }, [allParams, goTo, returnPage]);

  useDidMount(() => {
    initScreen();
  });

  return {
    initialized,
    onClickBack,
  };
};
