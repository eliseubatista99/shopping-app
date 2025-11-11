import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ChipProps } from "./chip";

export const ChipMobile: React.FC<ChipProps> = ({ styles, onClick, text }) => {
  return (
    <div
      data-testid="chip"
      onClick={() => onClick?.()}
      style={{
        borderRadius: "20px",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid black",
        width: "fit-content",
        padding: "3px 10px",
        ...styles,
      }}
    >
      <Typography>{text}</Typography>
    </div>
  );
};
