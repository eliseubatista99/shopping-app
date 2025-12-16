import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { QuantityFieldDesktop } from "./quantityField.desktop";
import { QuantityFieldMobile } from "./quantityField.mobile";

export interface QuantityFieldProps {
  currentQuantity: number;
  minQuantity?: number;
  maxQuantity?: number;
  styles?: React.CSSProperties;
  onChange?: (quantity: number) => void;
}

export const QuantityField: React.FC<QuantityFieldProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <QuantityFieldMobile {...props} />}
      {currentSize === "desktop" && <QuantityFieldDesktop {...props} />}
    </>
  );
};
