import React from "react";
import type { OrderListItemProps } from "./orderListItem";
import { OrderListItemMobile } from "./orderListItem.mobile";

export const OrderListItemDesktop: React.FC<OrderListItemProps> = (props) => {
  return <OrderListItemMobile {...props} />;
};
