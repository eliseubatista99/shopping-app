import { PAGES, SEARCH_PARAMS } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useStoreAuthentication } from "@store";
import { useCallback } from "react";
import type { AuthenticatedScreenProps } from "./authenticatedScreen";

export const useAuthenticatedScreenHelper = ({
  returnPage,
}: AuthenticatedScreenProps) => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const { goTo } = useNavigation();

  const initScreen = useCallback(async () => {
    if (!isAuthenticated) {
      goTo({
        path: PAGES.SIGN_UP_OR_LOGIN,
        params: {
          [SEARCH_PARAMS.RETURN_PAGE]: returnPage,
        },
        addToHistory: false,
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
