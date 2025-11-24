import { Overlays } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";
import type { AppHeaderProps } from "./appHeader";

export const useAppHeaderHelper = ({ searchBar, back }: AppHeaderProps) => {
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
      searchBar?.onSearchBarSubmit?.(data);
    },
    [searchBar]
  );

  const handleSearchBarClick = React.useCallback(() => {
    if (!isItemVisible(Overlays.search)) {
      showItem(Overlays.search);
    }
  }, [isItemVisible, showItem]);

  const handleClickBack = React.useCallback(() => {
    if (back?.onClick) {
      back.onClick?.();
    } else {
      goBack();
    }
  }, [back, goBack]);

  return {
    i18n,
    handleSearchBarSubmit,
    handleSearchBarClick,
    handleClickBack,
  };
};
