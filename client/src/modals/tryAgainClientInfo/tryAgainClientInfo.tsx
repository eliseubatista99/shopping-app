import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ModalTryAgainClientInfoDesktop } from "./tryAgainClientInfo.desktop";
import { ModalTryAgainClientInfoMobile } from "./tryAgainClientInfo.mobile";

export const TryAgainClientInfoModal: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ModalTryAgainClientInfoMobile />}
      {currentSize === "desktop" && <ModalTryAgainClientInfoDesktop />}
    </>
  );
};
