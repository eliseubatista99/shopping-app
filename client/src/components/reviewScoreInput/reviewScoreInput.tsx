import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ReviewScoreInputDesktop } from "./reviewScoreInput.desktop";
import { ReviewScoreInputMobile } from "./reviewScoreInput.mobile";

export interface ReviewScoreInputProps {
  value: number;
  starsSize?: number;
  styles?: React.CSSProperties;
  onClick?: (value: number) => void;
}

export const ReviewScoreInput: React.FC<ReviewScoreInputProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ReviewScoreInputMobile {...props} />}
      {currentSize === "desktop" && <ReviewScoreInputDesktop {...props} />}
    </>
  );
};
