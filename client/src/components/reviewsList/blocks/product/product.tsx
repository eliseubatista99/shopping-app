import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ProductBlockDesktop } from "./product.desktop";
import { ProductBlockMobile } from "./product.mobile";

export const ProductBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductBlockMobile />}
      {currentSize === "desktop" && <ProductBlockDesktop />}
    </>
  );
};
