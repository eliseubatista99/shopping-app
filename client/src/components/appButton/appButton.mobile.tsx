import { Button, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppButtonProps } from "./appButton";

export const AppButtonMobile: React.FC<AppButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      styles={{
        borderRadius: "20px",
        padding: "14px 18px",
        height: "24px",
      }}
    >
      <Typography
        {...text.props}
        styles={{ fontSize: "14px", fontWeight: 400, ...text.props?.styles }}
      >
        {text.content}
      </Typography>
    </Button>
  );
};
