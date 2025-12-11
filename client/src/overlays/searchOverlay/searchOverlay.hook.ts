import { OVERLAYS, PAGES, SEARCH_PARAMS } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import { useStoreSearch } from "@store";
import React from "react";

export const useOverlaySearchHelper = () => {
  const previousSearches = useStoreSearch((state) => state.previousSearches);
  // const setProductFilters = useStoreProduct((state) => state.setProductFilters);
  const { goTo, currentPath } = useNavigation();
  const { hideItem } = useFeedback();
  const { searchText } = useAppSearchParams();

  const submitSearch = React.useCallback(
    async (text: string) => {
      hideItem(OVERLAYS.SEARCH);

      // setProductFilters({
      //   text,
      // });

      if (currentPath !== PAGES.PRODUCT_LIST) {
        goTo({
          path: PAGES.PRODUCT_LIST,
          params: {
            [SEARCH_PARAMS.SEARCH_TEXT]: text,
          },
        });
      } else {
        searchText.set(text);
      }
    },
    [currentPath, goTo, hideItem, searchText]
  );

  const onClickBack = React.useCallback(() => {
    hideItem(OVERLAYS.SEARCH);
  }, [hideItem]);

  return {
    previousSearches,
    submitSearch,
    onClickBack,
  };
};
