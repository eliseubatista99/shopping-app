import React from "react";
import type { SellerListItemProps } from "./sellerListItem";
import { SellerListItemMobile } from "./sellerListItem.mobile";

export const SellerListItemDesktop: React.FC<SellerListItemProps> = (props) => {
  return <SellerListItemMobile {...props} />;
};
