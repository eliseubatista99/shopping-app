import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { OverlaySearchDesktop } from "./searchOverlay.desktop";
import { OverlaySearchMobile } from "./searchOverlay.mobile";

export const OverlaySearch: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OverlaySearchMobile />}
      {currentSize === "desktop" && <OverlaySearchDesktop />}
    </>
  );
};

export default OverlaySearch;
