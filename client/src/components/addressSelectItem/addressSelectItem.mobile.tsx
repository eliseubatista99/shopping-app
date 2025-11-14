import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AddressHelper } from "@helpers";
import React from "react";
import type { AddressSelectItemProps } from "./addressSelectItem";

export const AddressSelectItemMobile: React.FC<AddressSelectItemProps> = (
  props
) => {
  const { address, onClick, styles } = props;

  return (
    <div
      data-testid="product-grid-item"
      style={{
        width: "120px",
        minHeight: "90px",
        height: "fit-content",
        maxHeight: "100%",
        border: "1px solid #727272ff",
        padding: "10px",
        gap: "8px",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      <Typography styles={{ fontSize: "16px", fontWeight: 600 }}>
        {address.name}
      </Typography>
      <Typography styles={{ fontSize: "12px" }}>
        {AddressHelper.formatAddressShort(address)}
      </Typography>
    </div>
  );
};
