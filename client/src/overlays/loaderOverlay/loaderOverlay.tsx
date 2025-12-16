import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { OverlayLoaderDesktop } from "./loaderOverlay.desktop";
import { OverlayLoaderMobile } from "./loaderOverlay.mobile";

export const OverlayLoader: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OverlayLoaderMobile />}
      {currentSize === "desktop" && <OverlayLoaderDesktop />}
    </>
  );
};
