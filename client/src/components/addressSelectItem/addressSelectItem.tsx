import type { AddressDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AddressSelectItemDesktop } from "./addressSelectItem.desktop";
import { AddressSelectItemMobile } from "./addressSelectItem.mobile";

export interface AddressSelectItemProps {
  address: AddressDto;
  onClick?: () => void;
  styles?: React.CSSProperties;
}

export const AddressSelectItem: React.FC<AddressSelectItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AddressSelectItemMobile {...props} />}
      {currentSize === "desktop" && <AddressSelectItemDesktop {...props} />}
    </>
  );
};
