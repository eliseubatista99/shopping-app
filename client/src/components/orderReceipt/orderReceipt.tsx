import type { OrderDetailDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { OrderReceiptDesktop } from "./orderReceipt.desktop";
import { OrderReceiptMobile } from "./orderReceipt.mobile";

export interface OrderReceiptProps {
  order: OrderDetailDto;
  styles?: React.CSSProperties;
}

export const OrderReceipt: React.FC<OrderReceiptProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OrderReceiptMobile {...props} />}
      {currentSize === "desktop" && <OrderReceiptDesktop {...props} />}
    </>
  );
};
