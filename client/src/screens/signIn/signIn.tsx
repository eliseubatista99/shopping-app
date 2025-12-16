import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SignInDesktop } from "./signIn.desktop";
import { SignInMobile } from "./signIn.mobile";

export const SignIn: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SignInMobile />}
      {currentSize === "desktop" && <SignInDesktop />}
    </>
  );
};
