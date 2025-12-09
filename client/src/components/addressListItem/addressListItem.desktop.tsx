import React from "react";
import type { AddressListItemProps } from "./addressListItem";
import { AddressListItemMobile } from "./addressListItem.mobile";

export const AddressListItemDesktop: React.FC<AddressListItemProps> = (props) => {
  return <AddressListItemMobile {...props} />;
};
