import { Assets } from "@assets";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductQuantityChipProps } from "./productQuantityChip";
import { useProductQuantityChipHelper } from "./productQuantityChip.hook";

export const ProductQuantityChipMobile: React.FC<ProductQuantityChipProps> = (
  props
) => {
  const { onClickClear, onChangeQuantity } =
    useProductQuantityChipHelper(props);
  const { styles } = props;

  return (
    <div
      data-testid="productQuantityChip"
      style={{
        border: "1px solid #ffc400ff",
        width: "fit-content",
        borderRadius: "20px",
        flexDirection: "row",
        gap: "5px",
        alignItems: "center",
        justifyContent: "center",
        padding: "3px 10px",
        display: "grid",
        gridTemplateColumns: "15px max-content 15px",
        ...styles,
      }}
    >
      {props.value < 2 && (
        <Assets.Icons.Trash
          width="15px"
          height="15px"
          onClick={() => onClickClear()}
        />
      )}
      {props.value > 1 && (
        <div onClick={() => onChangeQuantity(-1)}>
          <Typography styles={{ fontWeight: 400, fontSize: "18px" }}>
            {"-"}
          </Typography>
        </div>
      )}

      <Typography>{props.value}</Typography>
      <div onClick={() => onChangeQuantity(1)}>
        <Typography styles={{ fontWeight: 400, fontSize: "18px" }}>
          {"+"}
        </Typography>
      </div>
    </div>
  );
};
