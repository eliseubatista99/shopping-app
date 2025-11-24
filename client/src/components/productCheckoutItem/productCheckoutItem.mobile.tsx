import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { CurrencyBlock } from "../currencyBlock";
import type { ProductCheckoutItemProps } from "./productCheckoutItem";
import { useProductCheckoutItemHelper } from "./productCheckoutItem.hook";

export const ProductCheckoutItemMobile: React.FC<ProductCheckoutItemProps> = (
  props
) => {
  const { currency } = useProductCheckoutItemHelper(props);
  const { styles, product } = props;
  return (
    <div
      data-testid="productCheckoutItem"
      style={{
        background: "#eeeeeeff",
        borderRadius: "8px",
        padding: "15px",
        ...styles,
      }}
    >
      <div style={{ width: "100%", flexDirection: "row", gap: "5px" }}>
        <Image
          src={product.image}
          styles={{
            height: "60px",
            width: "60px",
            objectFit: "contain",
            mixBlendMode: "multiply",
          }}
        />
        <div style={{ flex: 1, justifyContent: "center" }}>
          <Typography>{product.name}</Typography>
          <CurrencyBlock
            value={{
              value: product.price,
            }}
            oldValue={{
              value: product.originalPrice,
              position: "vertical",
            }}
            currency={currency}
          />
        </div>
      </div>

      <div
        style={{
          width: "fit-content",
          borderRadius: "20px",
          border: "1px solid #ffc400ff",
        }}
      ></div>
    </div>
  );
};
