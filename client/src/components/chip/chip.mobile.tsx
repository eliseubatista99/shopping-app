import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ChipProps } from "./chip";

export const ChipMobile: React.FC<ChipProps> = ({
  styles,
  onClick,
  text,
  textProps,
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
        width: "fit-content",
        flexDirection: "row",
        gap: "5px",
        height: "24px",
        padding: "15px",
        border: "none",
        background: "#e7e7e7ff",
        ...styles,
      }}
    >
      {leftContent}
      <Typography
        {...textProps}
        styles={{ fontSize: "14px", ...textProps?.styles }}
      >
        {text}
      </Typography>
      {rightContent}
    </div>
  );
};
