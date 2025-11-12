import type { AddressDto } from "@api";
import { Drawers } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import React from "react";

export const useAddressBlockHelper = () => {
  const { hideItem } = useFeedback();

  const onAddressSelected = React.useCallback(
    (data: AddressDto | undefined) => {
      console.log("ZAU", data);
      hideItem(Drawers.selectAddress);
    },
    [hideItem]
  );

  return {
    onAddressSelected,
  };
};
