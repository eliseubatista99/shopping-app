import type { ProductDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { OffersGroupBlockDesktop } from "./offersGroup.desktop";
import { OffersGroupBlockMobile } from "./offersGroup.mobile";

export interface OffersGroupBlockProps {
  title: string;
  products: ProductDto[];
}

export const OffersGroupBlock: React.FC<OffersGroupBlockProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OffersGroupBlockMobile {...props} />}
      {currentSize === "desktop" && <OffersGroupBlockDesktop {...props} />}
    </>
  );
};
