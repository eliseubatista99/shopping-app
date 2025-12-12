import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { BannersBlockDesktop } from "./banners.desktop";
import { BannersBlockMobile } from "./banners.mobile";

export const BannersBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <BannersBlockMobile />}
      {currentSize === "desktop" && <BannersBlockDesktop />}
    </>
  );
};
