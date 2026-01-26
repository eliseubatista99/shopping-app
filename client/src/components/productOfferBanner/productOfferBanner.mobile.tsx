import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductOfferBannerProps } from "./productOfferBanner";

export const ProductOfferBannerMobile: React.FC<ProductOfferBannerProps> = (
  props,
) => {
  const { onClick, banner } = props;

  return (
    <div
      data-testid="product-offer-banner"
      onClick={() => onClick?.()}
      style={{
        width: "200px",
        height: "300px",
        borderRadius: "20px",
        backgroundImage: `url('${banner.image}')`,
        backgroundSize: "cover",
        padding: "10px",
        color: banner.textColor || "#000000",
      }}
    >
      <Typography
        styles={{ color: "inherit", fontSize: "20px", fontWeight: "600" }}
      >
        {banner.title}
      </Typography>
      <Typography
        styles={{ color: "inherit", fontSize: "14px", fontWeight: "400" }}
      >
        {banner.subtitle}
      </Typography>
    </div>
  );
};
