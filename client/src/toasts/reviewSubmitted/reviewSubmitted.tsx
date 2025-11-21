import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ReviewSubmittedToastDesktop } from "./reviewSubmitted.desktop";
import { ReviewSubmittedToastMobile } from "./reviewSubmitted.mobile";

export const ReviewSubmittedToast: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ReviewSubmittedToastMobile />}
      {currentSize === "desktop" && <ReviewSubmittedToastDesktop />}
    </>
  );
};
