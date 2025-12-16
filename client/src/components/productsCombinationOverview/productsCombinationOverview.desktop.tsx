import React from "react";
import type { ProductsCombinationOverviewProps } from "./productsCombinationOverview";
import { ProductsCombinationOverviewMobile } from "./productsCombinationOverview.mobile";

export const ProductsCombinationOverviewDesktop: React.FC<
  ProductsCombinationOverviewProps
> = (props) => {
  return <ProductsCombinationOverviewMobile {...props} />;
};
