import React from "react";
import type { SeparatorProps } from "./separator";
import { SeparatorMobile } from "./separator.mobile";

export const SeparatorDesktop: React.FC<SeparatorProps> = (props) => {
  return <SeparatorMobile {...props} />;
};
