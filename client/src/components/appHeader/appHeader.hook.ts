import { Overlays } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";
import type { AppHeaderProps } from "./appHeader";

const searchBarInputName = "search-bar";

export const useAppHeaderHelper = ({
  onSearchBarSubmit,
  onSearchBarChange,
  onClickBack,
}: AppHeaderProps) => {
  const { t } = useAppTranslations();
  const { goBack } = useNavigation();
  const { showItem, isItemVisible } = useFeedback();

  const i18n = React.useMemo(() => {
    return {
      header: {
        searchBar: {
          placeholder: t("global.searchBar.placeholder"),
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
    if (!isItemVisible(Overlays.search)) {
      showItem(Overlays.search);
    }
  }, [isItemVisible, showItem]);

  const handleClickBack = React.useCallback(() => {
    if (onClickBack) {
      onClickBack?.();
    } else {
      goBack();
    }
  }, [goBack, onClickBack]);

  return {
    i18n,
    searchBarInputName,
    handleSearchBarSubmit,
    handleSearchBarChange,
    handleSearchBarClick,
    handleClickBack,
  };
};
