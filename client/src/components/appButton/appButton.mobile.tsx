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
      data-testid="app-button"
      onClick={() => onClick?.()}
      styles={{
        borderRadius: "20px",
        height: "24px",
        background: "#e9ca19ff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
        ...styles,
      }}
    >
      <Typography
        {...text.props}
        styles={{ fontSize: "18px", fontWeight: 400, ...text.props?.styles }}
      >
        {text.content}
      </Typography>
      {endContent}
    </Button>
  );
};
