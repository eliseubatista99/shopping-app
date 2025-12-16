import type { AddressDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AddressListItemDesktop } from "./addressListItem.desktop";
import { AddressListItemMobile } from "./addressListItem.mobile";

export interface AddressListItemProps {
  address: AddressDto;
  showDefaultTag?: boolean;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  onClickSetDefault?: () => void;
  styles?: React.CSSProperties;
}

export const AddressListItem: React.FC<AddressListItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AddressListItemMobile {...props} />}
      {currentSize === "desktop" && <AddressListItemDesktop {...props} />}
    </>
  );
};
