import React from "react";
import type { ProductListItemProps } from "./productListItem";
import { ProductListItemMobile } from "./productListItem.mobile";

export const ProductListItemDesktop: React.FC<ProductListItemProps> = (
  props
) => {
  return <ProductListItemMobile {...props} />;
};
