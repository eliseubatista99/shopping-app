import React from "react";
import type { ReviewScoreInputProps } from "./reviewScoreInput";
import { ReviewScoreInputMobile } from "./reviewScoreInput.mobile";

export const ReviewScoreInputDesktop: React.FC<ReviewScoreInputProps> = (
  props
) => {
  return <ReviewScoreInputMobile {...props} />;
};
