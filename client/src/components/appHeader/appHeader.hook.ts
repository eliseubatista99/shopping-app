import { OVERLAYS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppNavigation, useAppTranslations } from "@hooks";
import React from "react";
import type { AppHeaderProps } from "./appHeader";

export const useAppHeaderHelper = ({ searchBar, back }: AppHeaderProps) => {
  const { t } = useAppTranslations();
  const { goBack, goTo, history } = useAppNavigation();
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
    [searchBar],
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
      goTo({ path: back.defaultBackPath });
    } else {
      goBack();
    }
  }, [back, goBack, goTo]);

  const canGoBack = React.useCallback(() => {
    return history.length > 0 || back?.defaultBackPath || back?.onClick;
  }, [back, history]);

  return {
    i18n,
    handleSearchBarSubmit,
    handleSearchBarClick,
    handleClickBack,
    canGoBack: canGoBack(),
  };
};
