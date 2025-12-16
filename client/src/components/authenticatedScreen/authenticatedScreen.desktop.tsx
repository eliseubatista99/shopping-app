import React from "react";
import type { AuthenticatedScreenProps } from "./authenticatedScreen";
import { AuthenticatedScreenMobile } from "./authenticatedScreen.mobile";

export const AuthenticatedScreenDesktop: React.FC<AuthenticatedScreenProps> = (props) => {
  return <AuthenticatedScreenMobile {...props} />;
};
