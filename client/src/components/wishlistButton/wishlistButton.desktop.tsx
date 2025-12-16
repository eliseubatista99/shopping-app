import React from "react";
import type { WishlistButtonProps } from "./wishlistButton";
import { WishlistButtonMobile } from "./wishlistButton.mobile";

export const WishlistButtonDesktop: React.FC<WishlistButtonProps> = (props) => {
  return <WishlistButtonMobile {...props} />;
};
