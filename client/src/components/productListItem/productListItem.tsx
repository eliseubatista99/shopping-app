import type { ProductDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductListItemDesktop } from "./productListItem.desktop";
import { ProductListItemMobile } from "./productListItem.mobile";

export interface ProductListItemProps {
  product: ProductDto;
  onClick?: () => void;
  onClickAddToCart?: () => void;
}

export const ProductListItem: React.FC<ProductListItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductListItemMobile {...props} />}
      {currentSize === "desktop" && <ProductListItemDesktop {...props} />}
    </>
  );
};
