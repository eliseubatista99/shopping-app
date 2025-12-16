import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { MyReviewsDesktop } from "./myReviews.desktop";
import { MyReviewsMobile } from "./myReviews.mobile";

export const MyReviews: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <MyReviewsMobile />}
      {currentSize === "desktop" && <MyReviewsDesktop />}
    </>
  );
};
