import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { OrderDetailsDesktop } from "./orderDetails.desktop";
import { OrderDetailsMobile } from "./orderDetails.mobile";

export const OrderDetails: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OrderDetailsMobile />}
      {currentSize === "desktop" && <OrderDetailsDesktop />}
    </>
  );
};
