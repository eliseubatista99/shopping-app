import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { BaseInfoBlockDesktop } from "./baseInfo.desktop";
import { BaseInfoBlockMobile } from "./baseInfo.mobile";

export const BaseInfoBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <BaseInfoBlockMobile />}
      {currentSize === "desktop" && <BaseInfoBlockDesktop />}
    </>
  );
};
export default BaseInfoBlock;
