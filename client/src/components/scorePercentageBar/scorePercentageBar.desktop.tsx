import React from "react";
import type { ScorePercentageBarProps } from "./scorePercentageBar";
import { ScorePercentageBarMobile } from "./scorePercentageBar.mobile";

export const ScorePercentageBarDesktop: React.FC<ScorePercentageBarProps> = (props) => {
  return <ScorePercentageBarMobile {...props} />;
};
