import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ChangePhoneDesktop } from "./changePhone.desktop";
import { ChangePhoneMobile } from "./changePhone.mobile";

export const ChangePhone: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ChangePhoneMobile />}
      {currentSize === "desktop" && <ChangePhoneDesktop />}
    </>
  );
};
