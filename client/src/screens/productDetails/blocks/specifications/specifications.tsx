import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SpecificationsBlockDesktop } from "./specifications.desktop";
import { SpecificationsBlockMobile } from "./specifications.mobile";

export const SpecificationsBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SpecificationsBlockMobile />}
      {currentSize === "desktop" && <SpecificationsBlockDesktop />}
    </>
  );
};
