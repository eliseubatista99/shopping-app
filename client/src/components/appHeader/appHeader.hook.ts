import { OVERLAYS } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";
import type { AppHeaderProps } from "./appHeader";

export const useAppHeaderHelper = ({ searchBar, back }: AppHeaderProps) => {
  const { t } = useAppTranslations();
  const { goBack, goTo, history } = useNavigation();
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
    if (!isItemVisible(OVERLAYS.SEARCH)) {
      showItem(OVERLAYS.SEARCH);
    }
  }, [isItemVisible, showItem]);

  const handleClickBack = React.useCallback(() => {
    if (back?.onClick) {
      back.onClick?.();
    } else if (back?.defaultBackPath) {
      goTo({ path: back.defaultBackPath, addToHistory: false });
    } else {
      goBack();
    }
  }, [back, goBack, goTo]);

  return {
    i18n,
    handleSearchBarSubmit,
    handleSearchBarClick,
    handleClickBack,
    canGoBack: history.length > 0 || back?.defaultBackPath || back?.onClick,
  };
};
