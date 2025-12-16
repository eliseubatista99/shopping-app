import type { ProductDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductsComboItemDesktop } from "./productComboItem.desktop";
import { ProductsComboItemMobile } from "./productComboItem.mobile";

export interface ProductsComboItemProps {
  product: ProductDto;
  currency?: string;
  onClick?: () => void;
  styles?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
}

export const ProductsComboItem: React.FC<ProductsComboItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductsComboItemMobile {...props} />}
      {currentSize === "desktop" && <ProductsComboItemDesktop {...props} />}
    </>
  );
};
