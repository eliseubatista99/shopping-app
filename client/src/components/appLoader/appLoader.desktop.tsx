import React from "react";
import type { AppLoaderProps } from "./appLoader";
import { AppLoaderMobile } from "./appLoader.mobile";

export const AppLoaderDesktop: React.FC<AppLoaderProps> = (props) => {
  return <AppLoaderMobile {...props} />;
};
