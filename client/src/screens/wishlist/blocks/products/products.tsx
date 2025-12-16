import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ProductsBlockDesktop } from "./products.desktop";
import { ProductsBlockMobile } from "./products.mobile";

export const ProductsBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductsBlockMobile />}
      {currentSize === "desktop" && <ProductsBlockDesktop />}
    </>
  );
};
