import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import type { AppHeaderProps } from "../appHeader";
import { AppLayoutDesktop } from "./appLayout.desktop";
import { AppLayoutMobile } from "./appLayout.mobile";

export interface AppLayoutProps {
  appHeader?: AppHeaderProps;
  containerStyles?: React.CSSProperties;
  pageStyles?: React.CSSProperties;
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppLayoutMobile {...props} />}
      {currentSize === "desktop" && <AppLayoutDesktop {...props} />}
    </>
  );
};
