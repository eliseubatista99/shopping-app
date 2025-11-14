import { Pages } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useStoreSearch } from "@store";
import React from "react";

export const useSearchPageHelper = () => {
  const previousSearches = useStoreSearch((state) => state.previousSearches);
  const setSearchStoreState = useStoreSearch((state) => state.setPartialState);
  const { goTo } = useNavigation();

  const submitSearch = React.useCallback(
    async (text: string) => {
      setSearchStoreState({ searchText: text });
      goTo(Pages.productList);
    },
    [goTo, setSearchStoreState]
  );

  return {
    previousSearches,
    submitSearch,
  };
};
