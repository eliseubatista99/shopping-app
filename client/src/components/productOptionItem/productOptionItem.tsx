import type { ProductOptionDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductOptionItemDesktop } from "./productOptionItem.desktop";
import { ProductOptionItemMobile } from "./productOptionItem.mobile";

export interface ProductOptionItemProps {
  option: ProductOptionDto;
  currency?: string;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

export const ProductOptionItem: React.FC<ProductOptionItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductOptionItemMobile {...props} />}
      {currentSize === "desktop" && <ProductOptionItemDesktop {...props} />}
    </>
  );
};
