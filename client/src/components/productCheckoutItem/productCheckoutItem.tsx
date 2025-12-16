import type { CheckoutProductDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductCheckoutItemDesktop } from "./productCheckoutItem.desktop";
import { ProductCheckoutItemMobile } from "./productCheckoutItem.mobile";

export interface ProductCheckoutItemProps {
  product: CheckoutProductDto;
  onChangeQuantity?: (value: number) => void;
  styles?: React.CSSProperties;
}

export const ProductCheckoutItem: React.FC<ProductCheckoutItemProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductCheckoutItemMobile {...props} />}
      {currentSize === "desktop" && <ProductCheckoutItemDesktop {...props} />}
    </>
  );
};
