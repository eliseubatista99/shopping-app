import React from "react";
import type { ProductOfferBannerProps } from "./productOfferBanner";
import { ProductOfferBannerMobile } from "./productOfferBanner.mobile";

export const ProductOfferBannerDesktop: React.FC<ProductOfferBannerProps> = (
  props
) => {
  return <ProductOfferBannerMobile {...props} />;
};
