import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { FiltersBlockDesktop } from "./filters.desktop";
import { FiltersBlockMobile } from "./filters.mobile";

export const FiltersBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <FiltersBlockMobile />}
      {currentSize === "desktop" && <FiltersBlockDesktop />}
    </>
  );
};
