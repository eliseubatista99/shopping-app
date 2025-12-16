import React from "react";
import type { ProductQuantityChipProps } from "./productQuantityChip";
import { ProductQuantityChipMobile } from "./productQuantityChip.mobile";

export const ProductQuantityChipDesktop: React.FC<ProductQuantityChipProps> = (props) => {
  return <ProductQuantityChipMobile {...props} />;
};
