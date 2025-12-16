import type { AppModalProps } from "./appModal";
import { AppModalMobile } from "./appModal.mobile";

export const AppModalDesktop = (props: AppModalProps) => {
  return <AppModalMobile {...props} />;
};
