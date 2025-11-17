import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { AppOverlayDesktop } from "./appOverlay.desktop";
import { AppOverlayMobile } from "./appOverlay.mobile";

export interface AppOverlayProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  id: string;
}

export const AppOverlay: React.FC<AppOverlayProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppOverlayMobile {...props} />}
      {currentSize === "desktop" && <AppOverlayDesktop {...props} />}
    </>
  );
};

export default AppOverlay;
