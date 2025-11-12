import React from "react";
import type { ProductGridItemProps } from "./productGridItem";
import { ProductGridItemMobile } from "./productGridItem.mobile";

export const ProductGridItemDesktop: React.FC<ProductGridItemProps> = (
  props
) => {
  return <ProductGridItemMobile {...props} />;
};
