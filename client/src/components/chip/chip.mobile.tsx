import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ChipProps } from "./chip";

export const ChipMobile: React.FC<ChipProps> = ({
  styles,
  onClick,
  text,
  leftContent,
  rightContent,
}) => {
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
        flexDirection: "row",
        gap: "5px",
        height: "24px",
        ...styles,
      }}
    >
      {leftContent}
      <Typography styles={{ fontSize: "14px" }}>{text}</Typography>
      {rightContent}
    </div>
  );
};
