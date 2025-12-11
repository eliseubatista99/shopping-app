import type { SignInOrLoginSubmitData } from "@components";
import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import React from "react";

export const useAuthenticateBlockHelper = () => {
  const { goTo } = useNavigation();

  const onClickSubmit = React.useCallback(
    async (data: SignInOrLoginSubmitData) => {
      if (data.step === "login") {
        goTo({
          path: PAGES.LOG_IN,
          params: {
            [SEARCH_PARAMS.RETURN_PAGE]: PAGES.CART,
          },
        });
      } else {
        goTo({
          path: PAGES.SIGN_UP,
          params: {
            [SEARCH_PARAMS.RETURN_PAGE]: PAGES.CART,
          },
        });
      }
    },
    [goTo]
  );

  return {
    onClickSubmit,
  };
};
