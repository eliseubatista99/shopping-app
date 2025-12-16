import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ProductListDesktop } from "./productList.desktop";
import { ProductListMobile } from "./productList.mobile";

export const ProductList: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductListMobile />}
      {currentSize === "desktop" && <ProductListDesktop />}
    </>
  );
};
