import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";

export const useConditionOffersBlockHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();

  const i18n = React.useMemo(() => {
    return {
      lessThan10: {
        title: t("home.conditionOffers.lessThan10.title"),
        image: t("home.conditionOffers.lessThan10.image"),
      },
      bestSellers: {
        image: t("home.conditionOffers.bestSellers.image"),
        title: t("home.conditionOffers.bestSellers.title"),
      },
      noTransportationFees: {
        image: t("home.conditionOffers.noTransportationFees.image"),
        title: t("home.conditionOffers.noTransportationFees.title"),
      },
    };
  }, [t]);

  const buildConditionOffers = React.useCallback(() => {
    const lessThan10 = {
      image: i18n.lessThan10.image,
      title: i18n.lessThan10.title,
      onClick: () =>
        goTo({
          path: PAGES.PRODUCT_LIST,
          params: {
            [SEARCH_PARAMS.SEARCH_MAX_PRICE]: 10,
          },
        }),
    };

    const bestSellers = {
      image: i18n.bestSellers.image,
      title: i18n.bestSellers.title,
      onClick: () =>
        goTo({
          path: PAGES.PRODUCT_LIST,
          params: {
            [SEARCH_PARAMS.SEARCH_BEST_SELLER]: true,
          },
        }),
    };

    const withNoTransportationFees = {
      image: i18n.noTransportationFees.image,
      title: i18n.noTransportationFees.title,
      onClick: () =>
        goTo({
          path: PAGES.PRODUCT_LIST,
          params: {
            [SEARCH_PARAMS.SEARCH_FREE_SHIPPING]: true,
          },
        }),
    };

    return [lessThan10, bestSellers, withNoTransportationFees];
  }, [
    goTo,
    i18n.bestSellers.image,
    i18n.bestSellers.title,
    i18n.lessThan10.image,
    i18n.lessThan10.title,
    i18n.noTransportationFees.image,
    i18n.noTransportationFees.title,
  ]);

  return {
    i18n,
    offers: buildConditionOffers(),
  };
};
