import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ChangePasswordDesktop } from "./changePassword.desktop";
import { ChangePasswordMobile } from "./changePassword.mobile";

export const ChangePassword: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ChangePasswordMobile />}
      {currentSize === "desktop" && <ChangePasswordDesktop />}
    </>
  );
};
