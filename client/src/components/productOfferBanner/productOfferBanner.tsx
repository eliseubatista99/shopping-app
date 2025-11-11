import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductOfferBannerDesktop } from "./productOfferBanner.desktop";
import { ProductOfferBannerMobile } from "./productOfferBanner.mobile";

export interface ProductOfferBannerProps {
  category: string;
  onClick?: () => void;
}

export const ProductOfferBanner: React.FC<ProductOfferBannerProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductOfferBannerMobile {...props} />}
      {currentSize === "desktop" && <ProductOfferBannerDesktop {...props} />}
    </>
  );
};
