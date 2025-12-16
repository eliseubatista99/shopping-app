import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ModalGenericApiErrorDesktop } from "./genericApiError.desktop";
import { ModalGenericApiErrorMobile } from "./genericApiError.mobile";

export const GenericApiErrorModal: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ModalGenericApiErrorMobile />}
      {currentSize === "desktop" && <ModalGenericApiErrorDesktop />}
    </>
  );
};
