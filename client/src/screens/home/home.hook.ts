import { Api } from "@api";
import { DRAWERS } from "@constants";
import { useDidMount, useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import {
  useStoreAddresses,
  useStoreAuthentication,
  useStoreHome,
} from "@store";
import React from "react";

export const useHomePageHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const selectedAddress = useStoreAddresses((state) => state.selectedAddress);
  const setStoreHomeState = useStoreHome((state) => state.setHomeStoreState);
  const { showItem } = useFeedback();
  const { fetchProductOffers } = Api.GetProductOffers();
  const [headerTriggerVisible, setHeaderTriggerVisible] =
    React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);

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

  const retrieveProductOffers = React.useCallback(async () => {
    setLoading(true);
    const res = await fetchProductOffers();

    if (res.metadata.success) {
      setStoreHomeState({
        fromSearchHistory: res.data.fromSearchHistory,
        buyAgain: res.data.buyAgain,
        groups: res.data.groups,
        banners: res.data.banners,
      });

      const hasContent =
        res.data.fromSearchHistory?.length > 0 ||
        res.data.buyAgain?.length > 0 ||
        res.data.groups?.length > 0 ||
        res.data.banners?.length > 0;

      setHasError(!hasContent);
    } else {
      setHasError(true);
    }

    setLoading(false);
  }, [fetchProductOffers, setStoreHomeState]);

  const handleHeaderTrigger = React.useCallback((visible: boolean) => {
    setHeaderTriggerVisible(visible);
  }, []);

  const onAddressChipClicked = React.useCallback(() => {
    showItem(DRAWERS.SELECT_ADDRESS);
  }, [showItem]);

  useDidMount(() => {
    retrieveProductOffers();
  });

  return {
    i18n,
    isAuthenticated,
    header: {
      headerTriggerVisible,
      handleHeaderTrigger,
    },
    onAddressChipClicked,
    hasError,
    loading,
    retrieveProductOffers,
  };
};
