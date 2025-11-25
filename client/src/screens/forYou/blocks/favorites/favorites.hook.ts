import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreForYou } from "@store";
import React from "react";

export const useFavoritesBlockHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();

  const favorites = useStoreForYou((state) => state.favorites);

  const i18n = React.useMemo(() => {
    return {
      title: t("forYou.favorites.title"),
      seeAll: t("global.actions.seeAll"),
    };
  }, [t]);

  const onClickSeeAll = React.useCallback(() => {
    goTo({
      path: PAGES.ORDERS,
    });
  }, [goTo]);

  const favoritesData = React.useMemo(() => {
    const favoritesLength = favorites?.count || 0;
    let remaining = 0;

    if (favoritesLength > 3) {
      remaining = favoritesLength - 3;
    }

    return {
      count: favoritesLength,
      remaining,
      images: (favorites?.images || []).slice(0, 3),
    };
  }, [favorites?.count, favorites?.images]);

  return {
    i18n,
    favorites: favoritesData,
    onClickSeeAll,
  };
};
