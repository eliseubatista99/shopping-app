import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { PurchaseBlockDesktop } from "./purchase.desktop";
import { PurchaseBlockMobile } from "./purchase.mobile";

export const PurchaseBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <PurchaseBlockMobile />}
      {currentSize === "desktop" && <PurchaseBlockDesktop />}
    </>
  );
};
export default PurchaseBlock;
