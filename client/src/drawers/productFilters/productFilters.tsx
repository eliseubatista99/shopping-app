import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerProductFiltersDesktop } from "./productFilters.desktop";
import { DrawerProductFiltersMobile } from "./productFilters.mobile";

export const ProductFiltersDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerProductFiltersMobile />}
      {currentSize === "desktop" && <DrawerProductFiltersDesktop />}
    </>
  );
};
