import React from "react";
import type { ProductImageProps } from "./productImage";
import { ProductImageMobile } from "./productImage.mobile";

export const ProductImageDesktop: React.FC<ProductImageProps> = (props) => {
  return <ProductImageMobile {...props} />;
};
