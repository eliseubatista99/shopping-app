import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { CurrencyBlockDesktop } from "./currencyBlock.desktop";
import { CurrencyBlockMobile } from "./currencyBlock.mobile";

export type UnitsAndDecimals = {
  units: string;
  decimals: string;
};

export interface CurrencyBlockProps {
  value: {
    value: number;
    unitsTextStyles?: React.CSSProperties;
    decimalsTextStyles?: React.CSSProperties;
    currencyTextStyles?: React.CSSProperties;
    containerStyles?: React.CSSProperties;
  };
  oldValue?: {
    value: number;
    textStyles?: React.CSSProperties;
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
