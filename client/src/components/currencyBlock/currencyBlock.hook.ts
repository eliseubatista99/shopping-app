import React from "react";
import type { CurrencyBlockProps } from "./currencyBlock";

export const useCurrencyBlockHelper = ({ value }: CurrencyBlockProps) => {
  const calculateUnitsAndDecimals = React.useMemo(() => {
    const splitNumber = value.toString().split(".");

    if (splitNumber.length < 2) {
      return { units: splitNumber[0], decimals: "00" };
    }
    return { units: splitNumber[0], decimals: splitNumber[1] };
  }, [value]);

  return {
    units: calculateUnitsAndDecimals.units,
    decimals: calculateUnitsAndDecimals.decimals,
  };
};
