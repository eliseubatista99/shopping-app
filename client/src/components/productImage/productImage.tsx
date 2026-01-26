import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductImageDesktop } from "./productImage.desktop";
import { ProductImageMobile } from "./productImage.mobile";

export interface ProductImageProps {
  image: string | null | undefined;
  styles?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
  onClick?: () => void;
}

export const ProductImage: React.FC<ProductImageProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductImageMobile {...props} />}
      {currentSize === "desktop" && <ProductImageDesktop {...props} />}
    </>
  );
};
