import type { SignInOrLoginSubmitData } from "@components";
import { PAGES, SEARCH_PARAMS } from "@constants";
import React from "react";
import { useAppNavigation } from "../../../../hooks";

export const useAuthenticateBlockHelper = () => {
  const { goTo } = useAppNavigation();

  const onClickSubmit = React.useCallback(
    async (data: SignInOrLoginSubmitData) => {
      if (data.step === "login") {
        goTo({
          path: PAGES.LOG_IN,
          params: {
            [SEARCH_PARAMS.RETURN_PAGE]: PAGES.FOR_YOU,
          },
          addToHistory: true,
        });
      } else {
        goTo({
          path: PAGES.SIGN_UP,
          params: {
            [SEARCH_PARAMS.RETURN_PAGE]: PAGES.FOR_YOU,
          },
          addToHistory: true,
        });
      }
    },
    [goTo],
  );

  return {
    onClickSubmit,
  };
};
