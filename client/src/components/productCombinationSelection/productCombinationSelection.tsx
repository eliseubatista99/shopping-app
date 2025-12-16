import type { ProductDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductsCombinationSelectionDesktop } from "./productCombinationSelection.desktop";
import { ProductsCombinationSelectionMobile } from "./productCombinationSelection.mobile";

export interface ProductsCombinationSelectionProps {
  product: ProductDto;
  combinations: ProductDto[];
  selectedProducts: ProductDto[];
  onClickProduct?: (product: ProductDto) => void;
  onToggleProduct?: (product: ProductDto, checked: boolean) => void;
  onClickAddToCard?: (products: ProductDto[]) => void;
}

export const ProductsCombinationSelection: React.FC<
  ProductsCombinationSelectionProps
> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && (
        <ProductsCombinationSelectionMobile {...props} />
      )}
      {currentSize === "desktop" && (
        <ProductsCombinationSelectionDesktop {...props} />
      )}
    </>
  );
};
