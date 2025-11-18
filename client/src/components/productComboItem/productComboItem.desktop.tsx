import React from "react";
import { type ProductsComboItemProps } from "./productComboItem";
import { ProductsComboItemMobile } from "./productComboItem.mobile";

export const ProductsComboItemDesktop: React.FC<ProductsComboItemProps> = (
  props
) => {
  return <ProductsComboItemMobile {...props} />;
};
