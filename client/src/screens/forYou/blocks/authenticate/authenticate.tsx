import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { AuthenticateBlockDesktop } from "./authenticate.desktop";
import { AuthenticateBlockMobile } from "./authenticate.mobile";

export const AuthenticateBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AuthenticateBlockMobile />}
      {currentSize === "desktop" && <AuthenticateBlockDesktop />}
    </>
  );
};
