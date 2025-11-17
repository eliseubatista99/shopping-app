import { Overlays, Pages } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useStoreSearch } from "@store";
import React from "react";

export const useOverlaySearchHelper = () => {
  const previousSearches = useStoreSearch((state) => state.previousSearches);
  const setSearchStoreState = useStoreSearch((state) => state.setPartialState);
  const { goTo, currentPath } = useNavigation();
  const { hideItem } = useFeedback();

  const submitSearch = React.useCallback(
    async (text: string) => {
      setSearchStoreState({ searchText: text });
      hideItem(Overlays.search);

      if (currentPath !== Pages.productList) {
        goTo(Pages.productList);
      }
    },
    [currentPath, goTo, hideItem, setSearchStoreState]
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
