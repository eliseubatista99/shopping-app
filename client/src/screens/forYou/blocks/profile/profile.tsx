import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ProfileBlockDesktop } from "./profile.desktop";
import { ProfileBlockMobile } from "./profile.mobile";

export const ProfileBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProfileBlockMobile />}
      {currentSize === "desktop" && <ProfileBlockDesktop />}
    </>
  );
};
