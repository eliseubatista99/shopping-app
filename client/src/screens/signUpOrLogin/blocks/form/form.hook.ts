import type { SignInOrLoginSubmitData } from "@components";
import { PAGES } from "@constants";
import { useAppNavigation, useAppSearchParams } from "@hooks";
import React from "react";

export const useFormBlockHelper = () => {
  const { goTo } = useAppNavigation();
  const { allParams } = useAppSearchParams();

  const onClickSubmit = React.useCallback(
    async (data: SignInOrLoginSubmitData) => {
      if (data.step === "login") {
        goTo({
          path: PAGES.LOG_IN,
          params: {
            ...allParams.value,
          },
          addToHistory: true,
        });
      } else {
        goTo({
          path: PAGES.SIGN_UP,
          params: {
            ...allParams.value,
          },
          addToHistory: true,
        });
      }
    },
    [allParams, goTo],
  );

  return {
    onClickSubmit,
  };
};
