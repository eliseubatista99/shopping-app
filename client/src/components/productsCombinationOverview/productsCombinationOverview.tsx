import type { ProductDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductsCombinationOverviewDesktop } from "./productsCombinationOverview.desktop";
import { ProductsCombinationOverviewMobile } from "./productsCombinationOverview.mobile";

export interface ProductsCombinationOverviewProps {
  product: ProductDto;
  combinations: ProductDto[];
  onClickProduct?: (product: ProductDto) => void;
  onClickExpand?: () => void;
}

export const ProductsCombinationOverview: React.FC<
  ProductsCombinationOverviewProps
> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && (
        <ProductsCombinationOverviewMobile {...props} />
      )}
      {currentSize === "desktop" && (
        <ProductsCombinationOverviewDesktop {...props} />
      )}
    </>
  );
};
