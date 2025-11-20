import {
  useResponsive,
  type TypographyProps,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppButtonDesktop } from "./appButton.desktop";
import { AppButtonMobile } from "./appButton.mobile";

export interface AppButtonProps {
  text: {
    content: string;
    props?: Omit<TypographyProps, "children">;
  };
  endContent?: React.ReactNode;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

export const AppButton: React.FC<AppButtonProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppButtonMobile {...props} />}
      {currentSize === "desktop" && <AppButtonDesktop {...props} />}
    </>
  );
};
