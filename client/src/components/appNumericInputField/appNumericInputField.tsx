import {
  useResponsive,
  type NumericInputFieldProps,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppNumericInputFieldDesktop } from "./appNumericInputField.desktop";
import { AppNumericInputFieldMobile } from "./appNumericInputField.mobile";

export type AppNumericInputFieldProps = Omit<
  NumericInputFieldProps,
  "label" | "bottomMessage"
> & {
  label?: string;
  bottomMessage?: string;
  styles?: React.CSSProperties;
};

export const AppNumericInputField: React.FC<AppNumericInputFieldProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppNumericInputFieldMobile {...props} />}
      {currentSize === "desktop" && <AppNumericInputFieldDesktop {...props} />}
    </>
  );
};
