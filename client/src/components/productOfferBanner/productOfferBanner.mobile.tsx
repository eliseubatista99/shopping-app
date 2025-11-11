import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductOfferBannerProps } from "./productOfferBanner";
import { useProductOfferBannerHelper } from "./productOfferBanner.hook";

export const ProductOfferBannerMobile: React.FC<ProductOfferBannerProps> = (
  props
) => {
  const { i18n } = useProductOfferBannerHelper(props);
  const { onClick } = props;

  console.log("ZAU", i18n);

  return (
    <div
      data-testid="product-offer-banner"
      onClick={() => onClick?.()}
      style={{
        width: "200px",
        height: "300px",
        borderRadius: "20px",
        backgroundImage: `url('${i18n.image}')`,
        backgroundSize: "cover",
        padding: "10px",
        color: i18n.color,
      }}
    >
      <Typography
        styles={{ color: "inherit", fontSize: "20px", fontWeight: "600" }}
      >
        {i18n.title}
      </Typography>
      <Typography
        styles={{ color: "inherit", fontSize: "14px", fontWeight: "400" }}
      >
        {i18n.subtitle}
      </Typography>
    </div>
  );
};
