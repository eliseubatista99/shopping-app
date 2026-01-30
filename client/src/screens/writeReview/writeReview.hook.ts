import { PAGES } from "@constants";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppNavigation, useAppSearchParams } from "@hooks";
import React from "react";

export const useWriteReviewPageHelper = () => {
  const { productId } = useAppSearchParams();
  const { goTo } = useAppNavigation();

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    setLoading(true);
    if (!productId.value) {
      goTo({ path: PAGES.NOT_FOUND, addToHistory: true });
    }

    setLoading(false);
  }, [goTo, productId.value]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
  };
};
