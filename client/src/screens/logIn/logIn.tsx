import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { LogInDesktop } from "./logIn.desktop";
import { LogInMobile } from "./logIn.mobile";

export const LogIn: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <LogInMobile />}
      {currentSize === "desktop" && <LogInDesktop />}
    </>
  );
};
