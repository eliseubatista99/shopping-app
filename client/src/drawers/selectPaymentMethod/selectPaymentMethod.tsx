import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerSelectPaymentMethodDesktop } from "./selectPaymentMethod.desktop";
import { DrawerSelectPaymentMethodMobile } from "./selectPaymentMethod.mobile";

export const SelectPaymentMethodDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerSelectPaymentMethodMobile />}
      {currentSize === "desktop" && <DrawerSelectPaymentMethodDesktop />}
    </>
  );
};
