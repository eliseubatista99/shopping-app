import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { QuantityFieldProps } from "./quantityField";
import { useQuantityFieldHelper } from "./quantityField.hook";

export const QuantityFieldMobile: React.FC<QuantityFieldProps> = (props) => {
  const { i18n, onChangeQuantity } = useQuantityFieldHelper(props);
  const { styles } = props;

  return (
    <div
      data-testid="quantity-field"
      style={{
        width: "100%",
        border: "1px solid #000000",
        borderRadius: "6px",
        padding: "10px 15px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...styles,
      }}
    >
      <Typography>{i18n.quantity}</Typography>
      <div style={{ flexDirection: "column", gap: "1px" }}>
        <p
          onClick={() => onChangeQuantity(1)}
          style={{ fontSize: "10px", lineHeight: "15px", cursor: "pointer" }}
        >
          {"▲"}
        </p>
        <p
          onClick={() => onChangeQuantity(-1)}
          style={{ fontSize: "10px", lineHeight: "15px", cursor: "pointer" }}
        >
          {"▼"}
        </p>
      </div>
    </div>
  );
};
