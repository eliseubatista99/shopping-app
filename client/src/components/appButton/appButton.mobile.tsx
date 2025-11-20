import { Button, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppButtonProps } from "./appButton";

export const AppButtonMobile: React.FC<AppButtonProps> = ({
  text,
  onClick,
  endContent,
  styles,
}) => {
  return (
    <Button
      onClick={() => onClick?.()}
      styles={{
        borderRadius: "20px",
        height: "24px",
        background: "#e9ca19ff",
        padding: "13px 20px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...styles,
      }}
    >
      <Typography
        {...text.props}
        styles={{ fontSize: "13px", fontWeight: 400, ...text.props?.styles }}
      >
        {text.content}
      </Typography>
      {endContent}
    </Button>
  );
};
