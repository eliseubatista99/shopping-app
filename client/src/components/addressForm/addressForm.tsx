import type { AddressDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AddressFormDesktop } from "./addressForm.desktop";
import { AddressFormMobile } from "./addressForm.mobile";

export type AddressFormFields = {
  country?: string;
  name?: string;
  phone?: string;
  street?: string;
  location?: string;
  city?: string;
  postalCode?: string;
  setDefault?: boolean;
};

export interface AddressFormProps {
  onSubmit: (
    data: AddressFormFields
  ) => Promise<{ success: boolean | null | undefined }>;
  initialValue?: AddressDto;
  styles?: React.CSSProperties;
}

export const AddressForm: React.FC<AddressFormProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AddressFormMobile {...props} />}
      {currentSize === "desktop" && <AddressFormDesktop {...props} />}
    </>
  );
};
