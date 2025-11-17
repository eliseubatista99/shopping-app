import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import { CurrencyBlock } from "../currencyBlock";
import { ProductScore } from "../productScore";
import { Tag } from "../tag";
import type { ProductListItemProps } from "./productListItem";
import { useProductListItemHelper } from "./productListItem.hook";

export const ProductListItemMobile: React.FC<ProductListItemProps> = (
  props
) => {
  const { i18n, currency } = useProductListItemHelper();
  const { product, onClick, onClickAddToCart } = props;

  return (
    <div
      data-testid="product-list-item"
      style={{
        gap: "10px",
        flexDirection: "row",
        position: "relative",
        height: "fit-content",
        padding: "4px 8px",
      }}
      onClick={() => onClick?.()}
    >
      <div
        style={{
          flex: 1,
          background: "#e4e4e4ff",
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <Image
          src={product.image}
          styles={{
            position: "absolute",
            flex: 1,
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
          width: "59%",
          gap: "5px",
          padding: "5px 0",
          height: "fit-content",
          minHeight: "130px",
        }}
      >
        <Typography styles={{ fontSize: "14px" }}>{product.name}</Typography>
        {product.score !== undefined && <ProductScore score={product.score} />}
        <CurrencyBlock value={product.price} currency={currency} />
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
            styles={{ marginTop: "auto", width: "90%" }}
            onClick={() => onClickAddToCart?.()}
          />
        )}
      </div>
    </div>
  );
};
