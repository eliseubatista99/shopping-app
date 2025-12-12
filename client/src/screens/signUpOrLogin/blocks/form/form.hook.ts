import type { SignInOrLoginSubmitData } from "@components";
import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import React from "react";

export const useFormBlockHelper = () => {
  const { goTo } = useNavigation();
  const { allParams } = useAppSearchParams();

  const onClickSubmit = React.useCallback(
    async (data: SignInOrLoginSubmitData) => {
      if (data.step === "login") {
        goTo({
          path: PAGES.LOG_IN,
          params: {
            ...allParams.value,
          },
        });
      } else {
        goTo({
          path: PAGES.SIGN_UP,
          params: {
            ...allParams.value,
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
