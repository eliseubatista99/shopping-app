import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductQuantityChipDesktop } from "./productQuantityChip.desktop";
import { ProductQuantityChipMobile } from "./productQuantityChip.mobile";

export interface ProductQuantityChipProps {
  value: number;
  onChange?: (value: number) => void;
  styles?: React.CSSProperties;
}

export const ProductQuantityChip: React.FC<ProductQuantityChipProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductQuantityChipMobile {...props} />}
      {currentSize === "desktop" && <ProductQuantityChipDesktop {...props} />}
    </>
  );
};
