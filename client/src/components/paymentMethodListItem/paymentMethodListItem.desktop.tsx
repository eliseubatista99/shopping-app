import React from "react";
import type { PaymentMethodListItemProps } from "./paymentMethodListItem";
import { PaymentMethodListItemMobile } from "./paymentMethodListItem.mobile";

export const PaymentMethodListItemDesktop: React.FC<PaymentMethodListItemProps> = (props) => {
  return <PaymentMethodListItemMobile {...props} />;
};
