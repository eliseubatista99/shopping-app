import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { CartDesktop } from "./cart.desktop";
import { CartMobile } from "./cart.mobile";

export const Cart: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <CartMobile />}
      {currentSize === "desktop" && <CartDesktop />}
    </>
  );
};
