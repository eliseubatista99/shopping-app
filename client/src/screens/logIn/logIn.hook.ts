import { PAGES } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useAuthentication } from "@hooks";
import { useCallback, useState } from "react";

export const useLogInPageHelper = () => {
  const { goTo } = useNavigation();

  const { allParams } = useAppSearchParams();
  const { isAuthenticated } = useAuthentication();
  const [initialized, setInitialized] = useState(false);

  const initScreen = useCallback(() => {
    if (isAuthenticated) {
      goTo({
        path: PAGES.HOME,
        params: {
          ...allParams,
        },
      });
    } else {
      setInitialized(true);
    }
  }, [allParams, goTo, isAuthenticated]);

  useDidMount(() => {
    initScreen();
  });

  return {
    initialized,
  };
};
