import React from "react";
import type { ProductOptionItemProps } from "./productOptionItem";
import { ProductOptionItemMobile } from "./productOptionItem.mobile";

export const ProductOptionItemDesktop: React.FC<ProductOptionItemProps> = (
  props
) => {
  return <ProductOptionItemMobile {...props} />;
};
