import React from "react";
import type { ChipProps } from "./chip";
import { ChipMobile } from "./chip.mobile";

export const ChipDesktop: React.FC<ChipProps> = (props) => {
  return <ChipMobile {...props} />;
};
