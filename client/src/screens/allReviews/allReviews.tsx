import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { AllReviewsDesktop } from "./allReviews.desktop";
import { AllReviewsMobile } from "./allReviews.mobile";

export const AllReviews: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AllReviewsMobile />}
      {currentSize === "desktop" && <AllReviewsDesktop />}
    </>
  );
};
