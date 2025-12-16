import type { AppDrawerProps } from "./appDrawer";
import { AppDrawerMobile } from "./appDrawer.mobile";

export const AppDrawerDesktop = (props: AppDrawerProps) => {
  return <AppDrawerMobile {...props} />;
};
