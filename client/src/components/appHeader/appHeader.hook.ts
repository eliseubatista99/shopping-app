import { Pages } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";
import type { AppHeaderProps } from "./appHeader";

const searchBarInputName = "search-bar";

export const useAppHeaderHelper = ({
  onSearchBarSubmit,
  onClickSearchBar,
  onSearchBarChange,
}: AppHeaderProps) => {
  const { t } = useAppTranslations();
  const { goTo, goBack, currentPath } = useNavigation();

  const i18n = React.useMemo(() => {
    return {
      header: {
        searchBar: {
          placeholder: t("header.searchBar.placeholder"),
        },
      },
    };
  }, [t]);

  const handleSearchBarSubmit = React.useCallback(
    (data: string) => {
      onSearchBarSubmit?.(data);
    },
    [onSearchBarSubmit]
  );

  const handleSearchBarChange = React.useCallback(
    (data: string) => {
      onSearchBarChange?.(data);
    },
    [onSearchBarChange]
  );

  const handleSearchBarClick = React.useCallback(() => {
    if (onClickSearchBar) {
      onClickSearchBar();
    } else if (currentPath !== Pages.search) {
      goTo(Pages.search);
    }
  }, [currentPath, goTo, onClickSearchBar]);

  const handleClickBack = React.useCallback(() => {
    goBack();
  }, [goBack]);

  return {
    i18n,
    searchBarInputName,
    handleSearchBarSubmit,
    handleSearchBarChange,
    handleSearchBarClick,
    handleClickBack,
  };
};
