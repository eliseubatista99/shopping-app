import React from "react";
import type { ProductCheckoutItemProps } from "./productCheckoutItem";
import { ProductCheckoutItemMobile } from "./productCheckoutItem.mobile";

export const ProductCheckoutItemDesktop: React.FC<ProductCheckoutItemProps> = (props) => {
  return <ProductCheckoutItemMobile {...props} />;
};
