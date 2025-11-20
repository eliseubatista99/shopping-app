import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ReviewsBlockDesktop } from "./reviews.desktop";
import { ReviewsBlockMobile } from "./reviews.mobile";

export const ReviewsBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ReviewsBlockMobile />}
      {currentSize === "desktop" && <ReviewsBlockDesktop />}
    </>
  );
};
