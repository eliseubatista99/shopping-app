import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { OrdersDesktop } from "./orders.desktop";
import { OrdersMobile } from "./orders.mobile";

export const Orders: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OrdersMobile />}
      {currentSize === "desktop" && <OrdersDesktop />}
    </>
  );
};
