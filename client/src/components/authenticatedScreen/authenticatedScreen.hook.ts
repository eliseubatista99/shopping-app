import { PAGES, SEARCH_PARAMS } from "@constants";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useStoreAuthentication } from "@store";
import { useCallback } from "react";
import { useAppNavigation } from "../../hooks";
import type { AuthenticatedScreenProps } from "./authenticatedScreen";

export const useAuthenticatedScreenHelper = ({
  returnPage,
}: AuthenticatedScreenProps) => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated,
  );
  const { goTo } = useAppNavigation();

  const initScreen = useCallback(async () => {
    if (!isAuthenticated) {
      goTo({
        path: PAGES.SIGN_UP_OR_LOGIN,
        params: {
          [SEARCH_PARAMS.RETURN_PAGE]: returnPage,
        },
        addToHistory: true,
      });
    }
  }, [goTo, isAuthenticated, returnPage]);

  useDidMount(() => {
    initScreen();
  });

  return {
    isAuthenticated,
  };
};
