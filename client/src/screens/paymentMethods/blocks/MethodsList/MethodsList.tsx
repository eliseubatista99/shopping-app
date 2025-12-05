import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { MethodsListBlockDesktop } from "./MethodsList.desktop";
import { MethodsListBlockMobile } from "./MethodsList.mobile";

export const MethodsListBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <MethodsListBlockMobile />}
      {currentSize === "desktop" && <MethodsListBlockDesktop />}
    </>
  );
};
