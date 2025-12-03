import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ChangeNameDesktop } from "./changeName.desktop";
import { ChangeNameMobile } from "./changeName.mobile";

export const ChangeName: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ChangeNameMobile />}
      {currentSize === "desktop" && <ChangeNameDesktop />}
    </>
  );
};
