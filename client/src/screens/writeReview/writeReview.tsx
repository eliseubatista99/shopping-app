import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { WriteReviewDesktop } from "./writeReview.desktop";
import { WriteReviewMobile } from "./writeReview.mobile";

export const WriteReview: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <WriteReviewMobile />}
      {currentSize === "desktop" && <WriteReviewDesktop />}
    </>
  );
};
