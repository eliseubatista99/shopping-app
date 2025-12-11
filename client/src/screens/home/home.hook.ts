import { Api, type ProductDto } from "@api";
import { DRAWERS } from "@constants";
import { useDidMount, useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import {
  useStoreAddresses,
  useStoreAuthentication,
  useStoreHome,
} from "@store";
import React from "react";

type OfferGroup = {
  title: string;
  products: ProductDto[];
};

export const useHomePageHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const selectedAddress = useStoreAddresses((state) => state.selectedAddress);
  const setStoreHomeState = useStoreHome((state) => state.setHomeStoreState);
  const groups = useStoreHome((state) => state.groups);
  const buyAgain = useStoreHome((state) => state.buyAgain);
  const fromSearchHistory = useStoreHome((state) => state.fromSearchHistory);
  const banners = useStoreHome((state) => state.banners);
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

  const groupsList = React.useMemo(() => {
    const result: OfferGroup[] = [];

    if (buyAgain && buyAgain.length > 0) {
      result.push({
        title: i18n.buyAgain.title,
        products: buyAgain || [],
      });
    }

    if (fromSearchHistory && fromSearchHistory.length > 0) {
      result.push({
        title: i18n.fromHistory.title,
        products: fromSearchHistory || [],
      });
    }

    const mappedGroups = (groups || []).map(
      (g): OfferGroup => ({
        title: i18n.group.title(g.category),
        products: g.products || [],
      })
    );

    return [...result, ...mappedGroups];
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
    retrieveProductOffers();
  });

  return {
    i18n,
    isAuthenticated,
    groupsList,
    banners: banners,
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
