import {
  useNavigation,
  type GoToParams,
} from "@eliseubatista99/react-scaffold-core";
import { useCallback } from "react";

export const useAppNavigation = () => {
  const navigationHook = useNavigation();

  const goTo = useCallback(
    (data: GoToParams) => {
      const addToHistory = data.addToHistory === true ? true : false;

      return navigationHook.goTo({ ...data, addToHistory });
    },
    [navigationHook],
  );

  return {
    ...navigationHook,

    goTo,
  };
};
