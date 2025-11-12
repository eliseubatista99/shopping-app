import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerSelectAddressDesktop } from "./selectAddress.desktop";
import { DrawerSelectAddressMobile } from "./selectAddress.mobile";

export const SelectAddressDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerSelectAddressMobile />}
      {currentSize === "desktop" && <DrawerSelectAddressDesktop />}
    </>
  );
};
