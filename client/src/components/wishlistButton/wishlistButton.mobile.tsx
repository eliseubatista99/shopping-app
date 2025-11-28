import { Assets } from "@assets";
import React from "react";
import type { WishlistButtonProps } from "./wishlistButton";

export const WishlistButtonMobile: React.FC<WishlistButtonProps> = (props) => {
  const { styles, isWishlisted, onClick } = props;

  return (
    <div
      data-testid="wishlistButton"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick?.();
      }}
      style={{
        ...styles,
      }}
    >
      {isWishlisted && (
        <Assets.Icons.HeartFull
          width="20px"
          height="20px"
          style={{ color: "#b61313ff" }}
        />
      )}
      {!isWishlisted && (
        <Assets.Icons.HeartEmpty
          width="20px"
          height="20px"
          style={{ color: "#b61313ff" }}
        />
      )}
    </div>
  );
};
