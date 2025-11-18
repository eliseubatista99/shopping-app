import React from "react";
import type { CurrencyBlockProps, UnitsAndDecimals } from "./currencyBlock";

export const useCurrencyBlockHelper = ({ value }: CurrencyBlockProps) => {
  const calculateUnitsAndDecimals = (
    value: number | null | undefined
  ): UnitsAndDecimals => {
    if (!value) {
      return {
        units: "00",
        decimals: "00",
      };
    }

    const splitNumber = value.toString().split(".");

    if (splitNumber.length < 2) {
      return { units: splitNumber[0], decimals: "00" };
    }
    return { units: splitNumber[0], decimals: splitNumber[1] };
  };

  const calculatedValues = React.useMemo(() => {
    return calculateUnitsAndDecimals(value);
  }, [value]);

  return {
    value: calculatedValues,
  };
};
