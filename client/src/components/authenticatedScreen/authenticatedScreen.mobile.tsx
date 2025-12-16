import React from "react";
import type { AuthenticatedScreenProps } from "./authenticatedScreen";
import { useAuthenticatedScreenHelper } from "./authenticatedScreen.hook";

export const AuthenticatedScreenMobile: React.FC<AuthenticatedScreenProps> = (
  props
) => {
  const { isAuthenticated } = useAuthenticatedScreenHelper(props);
  const { children, styles } = props;

  return (
    <div
      data-testid="authenticatedScreen"
      style={{
        width: "100%",
        flex: 1,
        ...styles,
      }}
    >
      {isAuthenticated && <>{children}</>}
    </div>
  );
};
