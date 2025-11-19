import { Overlays, Pages, SEARCH_PARAMS } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useStoreSearch } from "@store";
import React from "react";

export const useOverlaySearchHelper = () => {
  const previousSearches = useStoreSearch((state) => state.previousSearches);
  const { goTo, currentPath } = useNavigation();
  const { hideItem } = useFeedback();

  const submitSearch = React.useCallback(
    async (text: string) => {
      hideItem(Overlays.search);

      if (currentPath !== Pages.productList) {
        goTo({
          path: Pages.productList,
          params: {
            [SEARCH_PARAMS.SEARCH_TEXT]: text,
          },
        });
      }
    },
    [currentPath, goTo, hideItem]
  );

  const onClickBack = React.useCallback(() => {
    hideItem(Overlays.search);
  }, [hideItem]);

  return {
    previousSearches,
    submitSearch,
    onClickBack,
  };
};
