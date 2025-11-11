import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ChipDesktop } from "./chip.desktop";
import { ChipMobile } from "./chip.mobile";

export interface ChipProps {
  onClick?: () => void;
  text: string;
  styles?: React.CSSProperties;
}

export const Chip: React.FC<ChipProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ChipMobile {...props} />}
      {currentSize === "desktop" && <ChipDesktop {...props} />}
    </>
  );
};
