import React from "react";
import type { CartProductListItemProps } from "./cartProductListItem";
import { CartProductListItemMobile } from "./cartProductListItem.mobile";

export const CartProductListItemDesktop: React.FC<CartProductListItemProps> = (props) => {
  return <CartProductListItemMobile {...props} />;
};
