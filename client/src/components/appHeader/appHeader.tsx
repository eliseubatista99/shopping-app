import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppHeaderDesktop } from "./appHeader.desktop";
import { AppHeaderMobile } from "./appHeader.mobile";

export interface AppHeaderProps {
  searchBar?: {
    visible: boolean;
    onSearchBarSubmit?: (value: string) => void;
  };
  back?: {
    visible: boolean;
    onClick?: () => void;
    styles?: React.CSSProperties;
  };
  styles?: React.CSSProperties;
}

export const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppHeaderMobile {...props} />}
      {currentSize === "desktop" && <AppHeaderDesktop {...props} />}
    </>
  );
};
