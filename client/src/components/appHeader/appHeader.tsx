import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppHeaderDesktop } from "./appHeader.desktop";
import { AppHeaderMobile } from "./appHeader.mobile";

export interface AppHeaderProps {
  onSearchBarChange?: (value: string) => void;
  onSearchBarSubmit?: (value: string) => void;
  onClickBack?: () => void;
  withBack?: boolean;
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
