import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SplashDesktop } from "./splash.desktop";
import { SplashMobile } from "./splash.mobile";

export const Splash: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SplashMobile />}
      {currentSize === "desktop" && <SplashDesktop />}
    </>
  );
};
