import React from "react";
import type { AddressSelectItemProps } from "./addressSelectItem";
import { AddressSelectItemMobile } from "./addressSelectItem.mobile";

export const AddressSelectItemDesktop: React.FC<AddressSelectItemProps> = (
  props
) => {
  return <AddressSelectItemMobile {...props} />;
};
