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
    onClickSearchBar?.();
  }, [onClickSearchBar]);

  return {
    i18n,
    searchBarInputName,
    handleSearchBarSubmit,
    handleSearchBarChange,
    handleSearchBarClick,
  };
};
