import React from "react";
import type { ProductsCombinationSelectionProps } from "./productCombinationSelection";
import { ProductsCombinationSelectionMobile } from "./productCombinationSelection.mobile";

export const ProductsCombinationSelectionDesktop: React.FC<
  ProductsCombinationSelectionProps
> = (props) => {
  return <ProductsCombinationSelectionMobile {...props} />;
};
