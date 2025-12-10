import type { PaymentMethodDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { PaymentMethodFormDesktop } from "./paymentMethodForm.desktop";
import { PaymentMethodFormMobile } from "./paymentMethodForm.mobile";

export type PaymentMethodFormFields = {
  cardNumber?: string;
  expirationMonth?: number;
  expirationYear?: number;
  securityCode?: string;
  name?: string;
};

export interface PaymentMethodFormProps {
  onSubmit: (data: PaymentMethodFormFields) => Promise<{ success: boolean }>;
  initialValue?: PaymentMethodDto;
  styles?: React.CSSProperties;
}

export const PaymentMethodForm: React.FC<PaymentMethodFormProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <PaymentMethodFormMobile {...props} />}
      {currentSize === "desktop" && <PaymentMethodFormDesktop {...props} />}
    </>
  );
};
