import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { WishlistButtonDesktop } from "./wishlistButton.desktop";
import { WishlistButtonMobile } from "./wishlistButton.mobile";

export interface WishlistButtonProps {
  isWishlisted?: boolean | null | undefined;
  onClick?: () => void;
  styles?: React.CSSProperties;
}

export const WishlistButton: React.FC<WishlistButtonProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <WishlistButtonMobile {...props} />}
      {currentSize === "desktop" && <WishlistButtonDesktop {...props} />}
    </>
  );
};
