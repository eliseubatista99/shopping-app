import { useAppTranslations } from "@hooks";
import React from "react";
import type { ProductOfferBannerProps } from "./productOfferBanner";

export const useProductOfferBannerHelper = ({
  category,
}: ProductOfferBannerProps) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t(`products.offer.banner.${category}.title`),
      subtitle: t(`products.offer.banner.${category}.subtitle`),
      image: t(`products.offer.banner.${category}.image`),
      color: t(`products.offer.banner.${category}.color`),
    };
  }, [category, t]);

  return {
    i18n,
  };
};
