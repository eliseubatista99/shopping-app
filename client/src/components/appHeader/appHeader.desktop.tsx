import React from "react";
import type { AppHeaderProps } from "./appHeader";
import { AppHeaderMobile } from "./appHeader.mobile";

export const AppHeaderDesktop: React.FC<AppHeaderProps> = (props) => {
  return <AppHeaderMobile {...props} />;
};
