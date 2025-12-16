import { OVERLAYS, PAGES, SEARCH_PARAMS } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import { useStoreSearch, type SearchHistoryEntry } from "@store";
import React from "react";

export const useOverlaySearchHelper = () => {
  const addSearch = useStoreSearch((state) => state.addSearch);
  const deleteSearch = useStoreSearch((state) => state.deleteSearch);
  const moveEntryToStart = useStoreSearch((state) => state.moveEntryToStart);
  const previousSearches = useStoreSearch((state) => state.previousSearches);
  // const setProductFilters = useStoreProduct((state) => state.setProductFilters);
  const { goTo, currentPath } = useNavigation();
  const { hideItem } = useFeedback();
  const { searchFilters, allParams } = useAppSearchParams();

  const goToList = React.useCallback(
    (text: string) => {
      hideItem(OVERLAYS.SEARCH);

      if (currentPath !== PAGES.PRODUCT_LIST) {
        goTo({
          path: PAGES.PRODUCT_LIST,
          params: {
            [SEARCH_PARAMS.SEARCH_TEXT]: text,
          },
        });
      } else {
        allParams.clear();
        searchFilters.set({ text });
      }
    },
    [allParams, currentPath, goTo, hideItem, searchFilters]
  );

  const submitSearch = React.useCallback(
    async (text: string) => {
      addSearch(text);
      goToList(text);
    },
    [addSearch, goToList]
  );

  const clickSearchFromHistory = React.useCallback(
    async (text: SearchHistoryEntry) => {
      moveEntryToStart(text.id);
      goToList(text.value);
    },
    [goToList, moveEntryToStart]
  );

  const clickRemoveEntry = React.useCallback(
    async (text: SearchHistoryEntry) => {
      deleteSearch(text.id);
    },
    [deleteSearch]
  );

  const onClickBack = React.useCallback(() => {
    hideItem(OVERLAYS.SEARCH);
  }, [hideItem]);

  return {
    previousSearches,
    submitSearch,
    onClickBack,
    clickSearchFromHistory,
    clickRemoveEntry,
  };
};
