import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerEditAddressDesktop } from "./editAddress.desktop";
import { DrawerEditAddressMobile } from "./editAddress.mobile";

export const EditAddressDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerEditAddressMobile />}
      {currentSize === "desktop" && <DrawerEditAddressDesktop />}
    </>
  );
};
