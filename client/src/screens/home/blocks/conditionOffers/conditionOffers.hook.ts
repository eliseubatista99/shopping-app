import { useAppTranslations } from "@hooks";
import React from "react";

export const useConditionOffersBlockHelper = () => {
  const { t } = useAppTranslations();

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
    };

    const bestSellers = {
      image: i18n.bestSellers.image,
      title: i18n.bestSellers.title,
    };

    const withNoTransportationFees = {
      image: i18n.noTransportationFees.image,
      title: i18n.noTransportationFees.title,
    };

    return [lessThan10, bestSellers, withNoTransportationFees];
  }, [i18n]);

  return {
    i18n,
    offers: buildConditionOffers(),
  };
};
