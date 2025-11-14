import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { AppDrawerDesktop } from "./appDrawer.desktop";
import { AppDrawerMobile } from "./appDrawer.mobile";

export interface AppDrawerProps {
  canBeClosed?: boolean;
  children?: React.ReactNode;
  drawerStyles?: React.CSSProperties;
  id: string;
}

export const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppDrawerMobile {...props} />}
      {currentSize === "desktop" && <AppDrawerDesktop {...props} />}
    </>
  );
};
