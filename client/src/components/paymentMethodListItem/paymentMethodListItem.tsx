import type { PaymentMethodDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { PaymentMethodListItemDesktop } from "./paymentMethodListItem.desktop";
import { PaymentMethodListItemMobile } from "./paymentMethodListItem.mobile";

export interface PaymentMethodListItemProps {
  paymentMethod: PaymentMethodDto;
  imageSize?: number;
  customText?: string;
  showDefaultTag?: boolean;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  onClickSetDefault?: () => void;
  styles?: React.CSSProperties;
}

export const PaymentMethodListItem: React.FC<PaymentMethodListItemProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <PaymentMethodListItemMobile {...props} />}
      {currentSize === "desktop" && <PaymentMethodListItemDesktop {...props} />}
    </>
  );
};
