import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerEditCardPaymentMethodDesktop } from "./editCardPaymentMethod.desktop";
import { DrawerEditCardPaymentMethodMobile } from "./editCardPaymentMethod.mobile";

export const EditCardPaymentMethodDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerEditCardPaymentMethodMobile />}
      {currentSize === "desktop" && <DrawerEditCardPaymentMethodDesktop />}
    </>
  );
};
