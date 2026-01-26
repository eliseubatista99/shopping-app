import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { CurrencyBlock } from "../currencyBlock";
import { ProductImage } from "../productImage";
import type { ProductGridItemProps } from "./productGridItem";
import { useProductGridItemHelper } from "./productGridItem.hook";

export const ProductGridItemMobile: React.FC<ProductGridItemProps> = (
  props,
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
      <ProductImage
        image={product?.image}
        styles={{ border: "1px solid #8a8a8a52" }}
      />

      <div style={{ width: "100%", gap: "5px" }}>
        <Typography overflowEllipsis styles={{ fontSize: "14px" }}>
          {product.name}
        </Typography>
        <CurrencyBlock
          value={{
            value: product.price || 0,
          }}
          oldValue={{
            value: product.originalPrice || 0,
          }}
          currency={currency}
        />
      </div>
    </div>
  );
};
