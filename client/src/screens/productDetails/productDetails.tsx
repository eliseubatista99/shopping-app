import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ProductDetailsDesktop } from "./productDetails.desktop";
import { ProductDetailsMobile } from "./productDetails.mobile";

export const ProductDetails: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductDetailsMobile />}
      {currentSize === "desktop" && <ProductDetailsDesktop />}
    </>
  );
};
