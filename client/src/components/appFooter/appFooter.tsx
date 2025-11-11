import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppFooterDesktop } from "./appFooter.desktop";
import { AppFooterMobile } from "./appFooter.mobile";

export const AppFooter: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppFooterMobile />}
      {currentSize === "desktop" && <AppFooterDesktop />}
    </>
  );
};
