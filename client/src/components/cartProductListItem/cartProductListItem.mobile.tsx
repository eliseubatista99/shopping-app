import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButton } from "../appButton";
import { CurrencyBlock } from "../currencyBlock";
import { ProductQuantityChip } from "../productQuantityChip";
import { ProductScore } from "../productScore";
import { Tag } from "../tag";
import type { CartProductListItemProps } from "./cartProductListItem";
import { useCartProductListItemHelper } from "./cartProductListItem.hook";

export const CartProductListItemMobile: React.FC<CartProductListItemProps> = (
  props
) => {
  const { i18n, currency } = useCartProductListItemHelper();
  const { product, onClick, onChangeQuantity, onClickRemoveCart } = props;

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
          src={product.image || ""}
          styles={{
            position: "absolute",
            flex: 1,
            zIndex: 0,
            aspectRatio: "1 / 1",
            objectFit: "contain",
            background: "none",
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
          width: "65%",
          gap: "5px",
          padding: "5px 0",
          height: "fit-content",
          minHeight: "130px",
        }}
      >
        <Typography styles={{ fontSize: "14px" }}>{product.name}</Typography>
        {product.score !== undefined && <ProductScore score={product.score} />}
        <CurrencyBlock
          value={{
            value: product.price || 0,
          }}
          currency={currency}
        />
        {!product.shippingCost && (
          <Tag
            text={i18n.tags.bestSeller}
            styles={{
              background: "#44ce21ff",
              borderRadius: 0,
            }}
          />
        )}
        <div
          style={{
            flexDirection: "row",
            gap: "10px",
            marginTop: "auto",
            alignItems: "center",
          }}
        >
          {onChangeQuantity && (
            <ProductQuantityChip
              value={product.quantity || 0}
              onChange={onChangeQuantity}
            />
          )}
          {onClickRemoveCart && (
            <AppButton
              text={{
                content: i18n.buttons.removeFromCart,
                props: {
                  styles: {
                    fontSize: "14px",
                  },
                },
              }}
              styles={{
                border: "1px solid #878787ff",
                background: "#ffffff",
                padding: "14px 20px",
                width: "fit-content",
              }}
              onClick={() => onClickRemoveCart?.()}
            />
          )}
        </div>
      </div>
    </div>
  );
};
