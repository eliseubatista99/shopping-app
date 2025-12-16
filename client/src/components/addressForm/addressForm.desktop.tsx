import React from "react";
import type { AddressFormProps } from "./addressForm";
import { AddressFormMobile } from "./addressForm.mobile";

export const AddressFormDesktop: React.FC<AddressFormProps> = (props) => {
  return <AddressFormMobile {...props} />;
};
