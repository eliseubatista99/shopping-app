import { PAGES } from "@constants";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import {
  useAppNavigation,
  useAppSearchParams,
  useAuthentication,
} from "@hooks";
import { useCallback, useState } from "react";

export const useSignInPageHelper = () => {
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
    const params = returnPage.value ? {} : allParams;

    goTo({
      path: path,
      params: {
        ...params,
      },
      addToHistory: false,
    });
  }, [allParams, goTo, returnPage.value]);

  useDidMount(() => {
    initScreen();
  });

  return {
    initialized,
    onClickBack,
  };
};
