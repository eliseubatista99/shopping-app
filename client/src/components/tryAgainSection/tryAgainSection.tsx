import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { TryAgainSectionDesktop } from "./tryAgainSection.desktop";
import { TryAgainSectionMobile } from "./tryAgainSection.mobile";

export interface TryAgainSectionProps {
  onClickRetry: () => void;
  customI18n?: {
    text?: string;
    tryAgain?: string;
  };
  styles?: React.CSSProperties;
}

export const TryAgainSection: React.FC<TryAgainSectionProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <TryAgainSectionMobile {...props} />}
      {currentSize === "desktop" && <TryAgainSectionDesktop {...props} />}
    </>
  );
};
