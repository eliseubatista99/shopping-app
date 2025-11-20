import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ReviewBlockDesktop } from "./review.desktop";
import { ReviewBlockMobile } from "./review.mobile";

export const ReviewBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ReviewBlockMobile />}
      {currentSize === "desktop" && <ReviewBlockDesktop />}
    </>
  );
};
