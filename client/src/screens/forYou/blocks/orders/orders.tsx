import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { OrdersBlockDesktop } from "./orders.desktop";
import { OrdersBlockMobile } from "./orders.mobile";

export const OrdersBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OrdersBlockMobile />}
      {currentSize === "desktop" && <OrdersBlockDesktop />}
    </>
  );
};
