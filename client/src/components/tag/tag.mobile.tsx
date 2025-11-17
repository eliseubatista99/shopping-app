import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { TagProps } from "./tag";

export const TagMobile: React.FC<TagProps> = ({
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
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
        flexDirection: "row",
        gap: "5px",
        background: "#bdbdbdff",
        borderRadius: "6px",
        padding: "4px 6px",
        height: "fit-content",
        ...styles,
      }}
    >
      {leftContent}
      <Typography
        {...textProps}
        styles={{ fontSize: "11px", ...textProps?.styles }}
      >
        {text}
      </Typography>
      {rightContent}
    </div>
  );
};
