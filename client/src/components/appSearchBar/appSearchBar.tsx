import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppSearchBarDesktop } from "./appSearchBar.desktop";
import { AppSearchBarMobile } from "./appSearchBar.mobile";

export interface AppSearchBarProps {
  name: string;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  styles?: React.CSSProperties;
  formStyles?: React.CSSProperties;
  inputFieldStyles?: {
    styles?: React.CSSProperties;
    containerStyles?: React.CSSProperties;
    inputStyles?: React.CSSProperties;
  };
}

export const AppSearchBar: React.FC<AppSearchBarProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppSearchBarMobile {...props} />}
      {currentSize === "desktop" && <AppSearchBarDesktop {...props} />}
    </>
  );
};
