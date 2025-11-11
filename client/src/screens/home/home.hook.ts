import { useFetchProductOffers } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreHome } from "@store";
import React from "react";

export const useHomePageHelper = () => {
  const { storeBase } = useStoreBase();
  const { storeHome, setPartialState } = useStoreHome();
  const { fetch: fetchProductOffers } = useFetchProductOffers();

  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      chips: {
        address: t("home.chips.address", {
          address: storeBase.client?.address.postalCode,
        }),
      },
      group: {
        title: (category: string) => t(`home.group.${category}.title`),
      },
      buyAgain: {
        title: t("home.group.buyAgain.title"),
      },
      fromHistory: {
        title: t("home.group.fromHistory.title"),
      },
    };
  }, [storeBase.client?.address.postalCode, t]);

  const initScreen = React.useCallback(async () => {
    const res = await fetchProductOffers();
    setPartialState({
      fromSearchHistory: res.fromSearchHistory,
      buyAgain: res.buyAgain,
      groups: res.groups,
      banners: res.banners,
    });
  }, [fetchProductOffers, setPartialState]);

  const groupsList = React.useMemo(() => {
    const mappedGroups = (storeHome.groups || []).map((g) => ({
      title: i18n.group.title(g.category),
      products: g.products || [],
    }));

    return [
      {
        title: i18n.buyAgain.title,
        products: storeHome.buyAgain || [],
      },
      {
        title: i18n.fromHistory.title,
        products: storeHome.fromSearchHistory || [],
      },
      ...mappedGroups,
    ];
  }, [
    i18n.buyAgain,
    i18n.fromHistory,
    i18n.group,
    storeHome.buyAgain,
    storeHome.fromSearchHistory,
    storeHome.groups,
  ]);

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
    groupsList,
    banners: storeHome.banners || [],
  };
};
