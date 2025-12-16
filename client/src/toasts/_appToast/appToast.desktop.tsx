import type { AppToastProps } from "./appToast";
import { AppToastMobile } from "./appToast.mobile";

export const AppToastDesktop: React.FC<AppToastProps> = (props) => {
  return <AppToastMobile {...props} />;
};
