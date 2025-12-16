import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppLoaderDesktop } from "./appLoader.desktop";
import { AppLoaderMobile } from "./appLoader.mobile";

export interface AppLoaderProps {
  visible: boolean;
  styles?: React.CSSProperties;
  loaderStyles?: React.CSSProperties;
}

export const AppLoader: React.FC<AppLoaderProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppLoaderMobile {...props} />}
      {currentSize === "desktop" && <AppLoaderDesktop {...props} />}
    </>
  );
};
