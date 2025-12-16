import type { ReviewsListScoreBlockProps } from "./score";
import { ScoreBlockMobile } from "./score.mobile";

export const ScoreBlockDesktop: React.FC<ReviewsListScoreBlockProps> = (
  props
) => {
  return <ScoreBlockMobile {...props} />;
};
