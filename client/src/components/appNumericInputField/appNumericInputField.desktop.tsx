import React from "react";
import type { AppNumericInputFieldProps } from "./appNumericInputField";
import { AppNumericInputFieldMobile } from "./appNumericInputField.mobile";

export const AppNumericInputFieldDesktop: React.FC<AppNumericInputFieldProps> = (props) => {
  return <AppNumericInputFieldMobile {...props} />;
};
