import React from "react";
import type { AppSearchBarProps } from "./appSearchBar";
import { AppSearchBarMobile } from "./appSearchBar.mobile";

export const AppSearchBarDesktop: React.FC<AppSearchBarProps> = (props) => {
  return <AppSearchBarMobile {...props} />;
};
