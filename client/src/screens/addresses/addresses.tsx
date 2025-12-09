import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { AddressesDesktop } from "./addresses.desktop";
import { AddressesMobile } from "./addresses.mobile";

export const Addresses: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AddressesMobile />}
      {currentSize === "desktop" && <AddressesDesktop />}
    </>
  );
};
