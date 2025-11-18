import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { CombinationBlockDesktop } from "./combination.desktop";
import { CombinationBlockMobile } from "./combination.mobile";

export const CombinationBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <CombinationBlockMobile />}
      {currentSize === "desktop" && <CombinationBlockDesktop />}
    </>
  );
};
export default CombinationBlock;
