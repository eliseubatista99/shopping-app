import React from "react";
import type { CurrencyBlockProps } from "./currencyBlock";
import { CurrencyBlockMobile } from "./currencyBlock.mobile";

export const CurrencyBlockDesktop: React.FC<CurrencyBlockProps> = (props) => {
  return <CurrencyBlockMobile {...props} />;
};
