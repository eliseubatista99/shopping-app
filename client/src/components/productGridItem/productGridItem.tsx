import type { ProductDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductGridItemDesktop } from "./productGridItem.desktop";
import { ProductGridItemMobile } from "./productGridItem.mobile";

export interface ProductGridItemProps {
  product: ProductDto;
  onClick?: () => void;
}

export const ProductGridItem: React.FC<ProductGridItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductGridItemMobile {...props} />}
      {currentSize === "desktop" && <ProductGridItemDesktop {...props} />}
    </>
  );
};
