import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AuthenticatedScreenDesktop } from "./authenticatedScreen.desktop";
import { AuthenticatedScreenMobile } from "./authenticatedScreen.mobile";

export interface AuthenticatedScreenProps {
  returnPage?: string;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

export const AuthenticatedScreen: React.FC<AuthenticatedScreenProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AuthenticatedScreenMobile {...props} />}
      {currentSize === "desktop" && <AuthenticatedScreenDesktop {...props} />}
    </>
  );
};
