import type { SellerDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { SellerListItemDesktop } from "./sellerListItem.desktop";
import { SellerListItemMobile } from "./sellerListItem.mobile";

export interface SellerListItemProps {
  seller: SellerDto;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

export const SellerListItem: React.FC<SellerListItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SellerListItemMobile {...props} />}
      {currentSize === "desktop" && <SellerListItemDesktop {...props} />}
    </>
  );
};
