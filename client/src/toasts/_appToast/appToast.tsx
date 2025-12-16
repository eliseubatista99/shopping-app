import {
  useResponsive,
  type ToastProps,
} from "@eliseubatista99/react-scaffold-core";
import { AppToastDesktop } from "./appToast.desktop";
import { AppToastMobile } from "./appToast.mobile";

export type AppToastProps = ToastProps;

export const AppToast: React.FC<AppToastProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppToastMobile {...props} />}
      {currentSize === "desktop" && <AppToastDesktop {...props} />}
    </>
  );
};
