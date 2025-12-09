import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppCheckboxDesktop } from "./appCheckbox.desktop";
import { AppCheckboxMobile } from "./appCheckbox.mobile";

export interface AppCheckboxProps {
  name: string;
  label?: string;
  checked: boolean;
  onToggle?: (checked: boolean) => void;
  checkboxStyles?: React.CSSProperties;
  styles?: React.CSSProperties;
}

export const AppCheckbox: React.FC<AppCheckboxProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppCheckboxMobile {...props} />}
      {currentSize === "desktop" && <AppCheckboxDesktop {...props} />}
    </>
  );
};
