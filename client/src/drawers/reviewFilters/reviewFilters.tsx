import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerReviewFiltersDesktop } from "./reviewFilters.desktop";
import { DrawerReviewFiltersMobile } from "./reviewFilters.mobile";

export const ReviewFiltersDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerReviewFiltersMobile />}
      {currentSize === "desktop" && <DrawerReviewFiltersDesktop />}
    </>
  );
};
