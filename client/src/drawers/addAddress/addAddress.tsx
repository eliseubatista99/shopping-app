import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerAddAddressDesktop } from "./addAddress.desktop";
import { DrawerAddAddressMobile } from "./addAddress.mobile";

export const AddAddressDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerAddAddressMobile />}
      {currentSize === "desktop" && <DrawerAddAddressDesktop />}
    </>
  );
};
