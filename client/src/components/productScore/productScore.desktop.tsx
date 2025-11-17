import React from "react";
import type { ProductScoreProps } from "./productScore";
import { ProductScoreMobile } from "./productScore.mobile";

export const ProductScoreDesktop: React.FC<ProductScoreProps> = (props) => {
  return <ProductScoreMobile {...props} />;
};
