import { Api } from "@api";
import { DRAWERS } from "@constants";
import { useDidMount, useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreHome } from "@store";
import React from "react";

export const useHomePageHelper = () => {
  const selectedAddress = useStoreBase((state) => state.selectedAddress);
  const setStoreHomeState = useStoreHome((state) => state.setHomeStoreState);
  const groups = useStoreHome((state) => state.groups);
  const buyAgain = useStoreHome((state) => state.buyAgain);
  const fromSearchHistory = useStoreHome((state) => state.fromSearchHistory);
  const banners = useStoreHome((state) => state.banners);
  const { showItem } = useFeedback();
  const { fetchProductOffers } = Api.GetProductOffers();
  const [headerTriggerVisible, setHeaderTriggerVisible] =
    React.useState<boolean>(true);

  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      chips: {
        address: t("home.chips.address", {
          address: selectedAddress?.postalCode,
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
  }, [selectedAddress?.postalCode, t]);

  const initScreen = React.useCallback(async () => {
    const res = await fetchProductOffers();
    setStoreHomeState({
      fromSearchHistory: res.data.fromSearchHistory,
      buyAgain: res.data.buyAgain,
      groups: res.data.groups,
      banners: res.data.banners,
    });
  }, [fetchProductOffers, setStoreHomeState]);

  const groupsList = React.useMemo(() => {
    const mappedGroups = (groups || []).map((g) => ({
      title: i18n.group.title(g.category),
      products: g.products || [],
    }));

    return [
      {
        title: i18n.buyAgain.title,
        products: buyAgain || [],
      },
      {
        title: i18n.fromHistory.title,
        products: fromSearchHistory || [],
      },
      ...mappedGroups,
    ];
  }, [
    buyAgain,
    fromSearchHistory,
    groups,
    i18n.buyAgain.title,
    i18n.fromHistory.title,
    i18n.group,
  ]);

  const handleHeaderTrigger = React.useCallback((visible: boolean) => {
    setHeaderTriggerVisible(visible);
  }, []);

  const onAddressChipClicked = React.useCallback(() => {
    showItem(DRAWERS.SELECT_ADDRESS);
  }, [showItem]);

  useDidMount(() => {
    initScreen();
  });

  return {
    i18n,
    groupsList,
    banners: banners,
    header: {
      headerTriggerVisible,
      handleHeaderTrigger,
    },
    onAddressChipClicked,
  };
};
