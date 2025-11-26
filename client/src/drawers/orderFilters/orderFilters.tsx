import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerOrderFiltersDesktop } from "./orderFilters.desktop";
import { DrawerOrderFiltersMobile } from "./orderFilters.mobile";

export const OrderFiltersDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerOrderFiltersMobile />}
      {currentSize === "desktop" && <DrawerOrderFiltersDesktop />}
    </>
  );
};
