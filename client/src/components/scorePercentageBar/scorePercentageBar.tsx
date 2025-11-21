import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ScorePercentageBarDesktop } from "./scorePercentageBar.desktop";
import { ScorePercentageBarMobile } from "./scorePercentageBar.mobile";

export interface ScorePercentageBarProps {
  score: number;
  percentage: number;
  onClick?: () => void;
  styles?: React.CSSProperties;
}

export const ScorePercentageBar: React.FC<ScorePercentageBarProps> = (
  props
) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ScorePercentageBarMobile {...props} />}
      {currentSize === "desktop" && <ScorePercentageBarDesktop {...props} />}
    </>
  );
};
