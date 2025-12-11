import {
  useResponsive,
  type ModalProps,
} from "@eliseubatista99/react-scaffold-core";
import { AppModalDesktop } from "./appModal.desktop";
import { AppModalMobile } from "./appModal.mobile";

export type AppModalProps = ModalProps;

export const AppModal: React.FC<AppModalProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AppModalMobile {...props} />}
      {currentSize === "desktop" && <AppModalDesktop {...props} />}
    </>
  );
};
