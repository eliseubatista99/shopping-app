import React from "react";
import type { AppButtonProps } from "./appButton";
import { AppButtonMobile } from "./appButton.mobile";

export const AppButtonDesktop: React.FC<AppButtonProps> = (props) => {
  return <AppButtonMobile {...props} />;
};
