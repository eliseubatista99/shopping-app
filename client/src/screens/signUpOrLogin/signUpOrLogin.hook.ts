import type { SignInOrLoginSubmitData } from "@components";
import { PAGES } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useAuthentication } from "@hooks";
import React, { useCallback } from "react";

export const useSignUpOrLoginPageHelper = () => {
  const { goTo } = useNavigation();
  const { allParams } = useAppSearchParams();
  const { isAuthenticated } = useAuthentication();

  const onClickSubmit = React.useCallback(
    async (data: SignInOrLoginSubmitData) => {
      if (data.step === "login") {
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

  const initScreen = useCallback(() => {
    if (isAuthenticated) {
      goTo({
        path: PAGES.HOME,
        params: {
          ...allParams,
        },
      });
    }
  }, [allParams, goTo, isAuthenticated]);

  useDidMount(() => {
    initScreen();
  });

  return {
    onClickSubmit,
  };
};
