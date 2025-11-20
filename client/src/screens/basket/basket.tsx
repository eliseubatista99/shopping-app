import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { BasketDesktop } from "./basket.desktop";
import { BasketMobile } from "./basket.mobile";

export const Basket: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <BasketMobile />}
      {currentSize === "desktop" && <BasketDesktop />}
    </>
  );
};
