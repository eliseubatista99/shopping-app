import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { OptionsBlockDesktop } from "./options.desktop";
import { OptionsBlockMobile } from "./options.mobile";

export const OptionsBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <OptionsBlockMobile />}
      {currentSize === "desktop" && <OptionsBlockDesktop />}
    </>
  );
};
