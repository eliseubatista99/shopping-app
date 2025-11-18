import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { CurrencyBlockDesktop } from "./currencyBlock.desktop";
import { CurrencyBlockMobile } from "./currencyBlock.mobile";

export type UnitsAndDecimals = {
  units: string;
  decimals: string;
};

export interface CurrencyBlockProps {
  value: number;
  oldValue?: {
    value: number;
    position?: "horizontal" | "vertical";
  };
  currency?: string;
  styles?: React.CSSProperties;
}

export const CurrencyBlock: React.FC<CurrencyBlockProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <CurrencyBlockMobile {...props} />}
      {currentSize === "desktop" && <CurrencyBlockDesktop {...props} />}
    </>
  );
};
