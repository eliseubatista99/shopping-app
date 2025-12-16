import type { AppOverlayProps } from "./appOverlay";
import { AppOverlayMobile } from "./appOverlay.mobile";

export const AppOverlayDesktop: React.FC<AppOverlayProps> = (props) => {
  return <AppOverlayMobile {...props} />;
};
