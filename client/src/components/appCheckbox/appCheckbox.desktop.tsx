import React from "react";
import { type AppCheckboxProps } from "./appCheckbox";
import { AppCheckboxMobile } from "./appCheckbox.mobile";

export const AppCheckboxDesktop: React.FC<AppCheckboxProps> = (props) => {
  return <AppCheckboxMobile {...props} />;
};
