import type { SignInOrLoginTemplateStep } from "@components";
import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import React from "react";

export const useAuthenticateBlockHelper = () => {
  const { goTo } = useNavigation();

  const onClickSubmit = React.useCallback(
    async (step: SignInOrLoginTemplateStep) => {
      if (step === "login") {
        goTo({
          path: PAGES.LOG_IN,
          addToHistory: false,
        });
      } else {
        goTo({
          path: PAGES.SIGN_UP,
          addToHistory: false,
        });
      }
    },
    [goTo]
  );

  return {
    onClickSubmit,
  };
};
