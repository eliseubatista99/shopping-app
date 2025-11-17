import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import { Tag } from "../tag";
import type { ProductListItemProps } from "./productListItem";
import { useProductListItemHelper } from "./productListItem.hook";

export const ProductListItemMobile: React.FC<ProductListItemProps> = (
  props
) => {
  const { i18n } = useProductListItemHelper();
  const { product, onClick, onClickAddToCart } = props;

  return (
    <div
      data-testid="product-list-item"
      style={{
        gap: "5px",
        flexDirection: "row",
        position: "relative",
        height: "fit-content",
        minHeight: "130px",
        padding: "4px 8px",
      }}
      onClick={() => onClick?.()}
    >
      <div
        style={{
          width: "40%",
          background: "#e4e4e4ff",
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <Image
          src={product.image}
          styles={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            background: "none",
            objectFit: "contain",
            zIndex: 0,
            mixBlendMode: "multiply",
          }}
        />
        {product.bestSeller && (
          <Tag
            text={i18n.tags.bestSeller}
            textProps={{
              styles: {
                color: "#ffffff",
              },
            }}
            styles={{
              position: "absolute",
              top: "5px",
              left: "5px",
              background: "#8a0000ff",
              zIndex: 1,
            }}
          />
        )}
      </div>

      <div
        style={{
          width: "60%",
          gap: "5px",
          padding: "5px 0",
          height: "fit-content",
        }}
      >
        <Typography styles={{ fontSize: "14px" }}>{product.name}</Typography>
        <Typography styles={{ fontWeight: "500", fontSize: "16px" }}>
          {product.price}
        </Typography>
        {product.freeShipping && (
          <Tag
            text={i18n.tags.bestSeller}
            styles={{
              background: "#44ce21ff",
              borderRadius: 0,
            }}
          />
        )}
        {onClickAddToCart && (
          <AppButton
            text={{
              content: i18n.buttons.addToCart,
            }}
            styles={{ marginTop: "auto" }}
            onClick={() => onClickAddToCart?.()}
          />
        )}
      </div>
    </div>
  );
};
