import React from "react";
import type { TryAgainSectionProps } from "./tryAgainSection";
import { TryAgainSectionMobile } from "./tryAgainSection.mobile";

export const TryAgainSectionDesktop: React.FC<TryAgainSectionProps> = (props) => {
  return <TryAgainSectionMobile {...props} />;
};
