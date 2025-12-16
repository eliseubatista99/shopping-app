import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DetailsBlockDesktop } from "./details.desktop";
import { DetailsBlockMobile } from "./details.mobile";

export const DetailsBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DetailsBlockMobile />}
      {currentSize === "desktop" && <DetailsBlockDesktop />}
    </>
  );
};
