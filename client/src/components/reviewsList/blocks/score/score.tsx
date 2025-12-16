import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ScoreBlockDesktop } from "./score.desktop";
import { ScoreBlockMobile } from "./score.mobile";

export interface ReviewsListScoreBlockProps {
  styles?: React.CSSProperties;
}

export const ScoreBlock: React.FC<ReviewsListScoreBlockProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ScoreBlockMobile {...props} />}
      {currentSize === "desktop" && <ScoreBlockDesktop {...props} />}
    </>
  );
};
