import type { OrderDto, ProductDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { OrderListItemDesktop } from "./orderListItem.desktop";
import { OrderListItemMobile } from "./orderListItem.mobile";

export type OrderAndProduct = {
  order: OrderDto;
  product: ProductDto;
};

export interface OrderListItemProps {
  order: OrderAndProduct;
  onClick?: () => void;
  styles?: React.CSSProperties;
}

export const OrderListItem: React.FC<OrderListItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OrderListItemMobile {...props} />}
      {currentSize === "desktop" && <OrderListItemDesktop {...props} />}
    </>
  );
};
