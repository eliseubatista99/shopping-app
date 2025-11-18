import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { CurrencyBlock } from "../currencyBlock";
import type { ProductGridItemProps } from "./productGridItem";
import { useProductGridItemHelper } from "./productGridItem.hook";

export const ProductGridItemMobile: React.FC<ProductGridItemProps> = (
  props
) => {
  const { product, onClick } = props;
  const { currency } = useProductGridItemHelper();

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
      <div style={{ width: "100%", gap: "5px" }}>
        <Typography overflowEllipsis styles={{ fontSize: "14px" }}>
          {product.name}
        </Typography>
        <CurrencyBlock
          value={product.price}
          oldValue={{
            value: product.originalPrice,
          }}
          currency={currency}
        />
      </div>
    </div>
  );
};
