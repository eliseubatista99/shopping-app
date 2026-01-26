import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
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
        color: banner.textColor || "#000000",
      }}
    >
      <Image
        src={banner.image || ""}
        styles={{
          position: "absolute",
          objectFit: "cover",
          // background: "none",
          // mixBlendMode: "multiply",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <div style={{ padding: "10px", zIndex: 1, width: "100%" }}>
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
    </div>
  );
};
