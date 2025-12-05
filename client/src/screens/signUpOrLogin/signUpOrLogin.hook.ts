import type { SignInOrLoginTemplateStep } from "@components";
import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import React from "react";

export const useSignUpOrLoginPageHelper = () => {
  const { goTo } = useNavigation();
  const { allParams } = useAppSearchParams();

  const onClickSubmit = React.useCallback(
    async (step: SignInOrLoginTemplateStep) => {
      if (step === "login") {
        goTo({
          path: PAGES.LOG_IN,
          params: {
            ...allParams,
          },
        });
      } else {
        goTo({
          path: PAGES.SIGN_UP,
          params: {
            ...allParams,
          },
        });
      }
    },
    [allParams, goTo]
  );

  return {
    onClickSubmit,
  };
};
