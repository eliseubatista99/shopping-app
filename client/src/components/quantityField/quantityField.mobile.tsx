import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { QuantityFieldProps } from "./quantityField";
import { useQuantityFieldHelper } from "./quantityField.hook";

export const QuantityFieldMobile: React.FC<QuantityFieldProps> = (props) => {
  const { i18n, onChangeQuantity, canDecrease, canIncrease } =
    useQuantityFieldHelper(props);
  const { styles } = props;

  return (
    <div
      data-testid="quantity-field"
      style={{
        width: "100%",
        border: "1px solid #000000",
        borderRadius: "12px",
        padding: "8px 15px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...styles,
      }}
    >
      <Typography styles={{ fontSize: "17px" }}>{i18n.quantity}</Typography>
      <div style={{ flexDirection: "column", gap: "10px" }}>
        <p
          onClick={() => onChangeQuantity(1)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
            height: "10px",
            width: "20px",
            lineHeight: 0,
            cursor: "pointer",
            pointerEvents: canIncrease ? undefined : "none",
          }}
        >
          {"▲"}
        </p>
        <p
          onClick={() => onChangeQuantity(-1)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
            lineHeight: 0,
            height: "10px",
            width: "20px",
            cursor: "pointer",
            pointerEvents: canDecrease ? undefined : "none",
          }}
        >
          {"▼"}
        </p>
      </div>
    </div>
  );
};
