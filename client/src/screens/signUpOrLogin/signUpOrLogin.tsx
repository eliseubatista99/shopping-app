import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SignUpOrLoginDesktop } from "./signUpOrLogin.desktop";
import { SignUpOrLoginMobile } from "./signUpOrLogin.mobile";

export const SignUpOrLogin: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SignUpOrLoginMobile />}
      {currentSize === "desktop" && <SignUpOrLoginDesktop />}
    </>
  );
};
