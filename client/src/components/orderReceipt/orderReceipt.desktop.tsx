import React from "react";
import type { OrderReceiptProps } from "./orderReceipt";
import { OrderReceiptMobile } from "./orderReceipt.mobile";

export const OrderReceiptDesktop: React.FC<OrderReceiptProps> = (props) => {
  return <OrderReceiptMobile {...props} />;
};
