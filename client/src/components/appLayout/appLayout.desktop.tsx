import type { AppLayoutProps } from "./appLayout";
import { AppLayoutMobile } from "./appLayout.mobile";

export const AppLayoutDesktop: React.FC<AppLayoutProps> = (props) => {
  return <AppLayoutMobile {...props} />;
};
