import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { OrdersListBlockDesktop } from "./ordersList.desktop";
import { OrdersListBlockMobile } from "./ordersList.mobile";

export const OrdersListBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OrdersListBlockMobile />}
      {currentSize === "desktop" && <OrdersListBlockDesktop />}
    </>
  );
};
