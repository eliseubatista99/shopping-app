import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SignInAndSecurityDesktop } from "./signInAndSecurity.desktop";
import { SignInAndSecurityMobile } from "./signInAndSecurity.mobile";

export const SignInAndSecurity: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SignInAndSecurityMobile />}
      {currentSize === "desktop" && <SignInAndSecurityDesktop />}
    </>
  );
};
