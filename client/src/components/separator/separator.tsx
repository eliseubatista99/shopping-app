import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { SeparatorDesktop } from "./separator.desktop";
import { SeparatorMobile } from "./separator.mobile";

export interface SeparatorProps {
  direction?: "horizontal" | "vertical";
  thickness?: number;
  styles?: React.CSSProperties;
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SeparatorMobile {...props} />}
      {currentSize === "desktop" && <SeparatorDesktop {...props} />}
    </>
  );
};
