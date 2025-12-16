import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerAddCardPaymentMethodDesktop } from "./addCardPaymentMethod.desktop";
import { DrawerAddCardPaymentMethodMobile } from "./addCardPaymentMethod.mobile";

export const AddCardPaymentMethodDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerAddCardPaymentMethodMobile />}
      {currentSize === "desktop" && <DrawerAddCardPaymentMethodDesktop />}
    </>
  );
};
