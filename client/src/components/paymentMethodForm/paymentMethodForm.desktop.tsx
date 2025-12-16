import React from "react";
import type { PaymentMethodFormProps } from "./paymentMethodForm";
import { PaymentMethodFormMobile } from "./paymentMethodForm.mobile";

export const PaymentMethodFormDesktop: React.FC<PaymentMethodFormProps> = (props) => {
  return <PaymentMethodFormMobile {...props} />;
};
