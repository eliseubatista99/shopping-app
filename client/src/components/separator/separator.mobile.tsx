import React from "react";
import type { SeparatorProps } from "./separator";

export const SeparatorMobile: React.FC<SeparatorProps> = (props) => {
  const { direction, styles, thickness = 2 } = props;

  return (
    <div
      data-testid="separator"
      style={{
        width: direction === "vertical" ? `${thickness}px` : "100%",
        height: direction === "vertical" ? "100%" : `${thickness}px`,
        background: "#e0e0e0",
        ...styles,
      }}
    />
  );
};
