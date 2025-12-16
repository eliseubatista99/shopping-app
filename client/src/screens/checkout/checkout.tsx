import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { CheckoutDesktop } from "./checkout.desktop";
import { CheckoutMobile } from "./checkout.mobile";

export const Checkout: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <CheckoutMobile />}
      {currentSize === "desktop" && <CheckoutDesktop />}
    </>
  );
};
