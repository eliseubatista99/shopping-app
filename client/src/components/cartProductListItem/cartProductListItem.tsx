import type { CartProductDetailsDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { CartProductListItemDesktop } from "./cartProductListItem.desktop";
import { CartProductListItemMobile } from "./cartProductListItem.mobile";

export interface CartProductListItemProps {
  product: CartProductDetailsDto;
  onClick?: () => void;
  onClickSelected?: (value: boolean) => void;
  onChangeQuantity?: (value: number) => void;
  onClickRemoveCart?: () => void;
  styles?: React.CSSProperties;
}

export const CartProductListItem: React.FC<CartProductListItemProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <CartProductListItemMobile {...props} />}
      {currentSize === "desktop" && <CartProductListItemDesktop {...props} />}
    </>
  );
};
