import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { AddressBlockDesktop } from "./address.desktop";
import { AddressBlockMobile } from "./address.mobile";

export const AddressBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <AddressBlockMobile />}
      {currentSize === "desktop" && <AddressBlockDesktop />}
    </>
  );
};
