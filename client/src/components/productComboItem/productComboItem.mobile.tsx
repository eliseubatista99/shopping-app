import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { CurrencyBlock } from "../currencyBlock";
import { ProductImage } from "../productImage";
import { ProductScore } from "../productScore";
import type { ProductsComboItemProps } from "./productComboItem";

export const ProductsComboItemMobile: React.FC<ProductsComboItemProps> = (
  props,
) => {
  const { onClick, product, styles, currency, imageStyles } = props;

  return (
    <div
      onClick={() => onClick?.()}
      style={{
        position: "relative",
        width: "130px",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100px",
        borderRadius: "8px",
        padding: "8px",
        gap: "5px",
        ...styles,
      }}
    >
      <ProductImage
        image={product?.image}
        styles={{
          width: "100%",
          border: "1px solid #8a8a8a52",
          borderRadius: "10px",
          ...imageStyles,
        }}
      />
      <div style={{ flex: 1, gap: "5px" }}>
        <Typography styles={{ fontSize: "14px", fontWeight: 600 }}>
          {product.name}
        </Typography>
        <ProductScore score={product.score || 0} starsSize={14} />
        <CurrencyBlock
          value={{
            value: product.price || 0,
          }}
          oldValue={{
            value: product.originalPrice || 0,
            position: "vertical",
          }}
          currency={currency}
        />
      </div>
    </div>
  );
};
