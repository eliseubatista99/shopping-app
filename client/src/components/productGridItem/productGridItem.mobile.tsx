import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductGridItemProps } from "./productGridItem";

export const ProductGridItemMobile: React.FC<ProductGridItemProps> = (
  props
) => {
  const { product, onClick } = props;

  return (
    <div
      data-testid="product-grid-item"
      key={product.id}
      style={{ gap: "5px" }}
      onClick={() => onClick?.()}
    >
      <Image
        src={product.image}
        styles={{
          width: "100%",
          aspectRatio: "1/1",
          background: "#e4e4e4ff",
          border: "1px solid #8a8a8a52",
          objectFit: "cover",
        }}
      />
      <div style={{ width: "100%" }}>
        <Typography overflowEllipsis styles={{ fontSize: "14px" }}>
          {product.name}
        </Typography>
        <Typography styles={{ fontWeight: "500", fontSize: "16px" }}>
          {product.price}
        </Typography>
      </div>
    </div>
  );
};
