import { PAGES } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import React from "react";

export const useAllReviewsPageHelper = () => {
  const { productId } = useAppSearchParams();

  const { goTo } = useNavigation();

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    setLoading(true);

    if (!productId.value) {
      goTo({ path: PAGES.NOT_FOUND, addToHistory: false });
      return;
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
