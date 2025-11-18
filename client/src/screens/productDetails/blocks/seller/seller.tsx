import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SellerBlockDesktop } from "./seller.desktop";
import { SellerBlockMobile } from "./seller.mobile";

export const SellerBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SellerBlockMobile />}
      {currentSize === "desktop" && <SellerBlockDesktop />}
    </>
  );
};
export default SellerBlock;
