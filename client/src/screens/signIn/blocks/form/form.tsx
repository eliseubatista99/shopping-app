import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { FormBlockDesktop } from "./form.desktop";
import { FormBlockMobile } from "./form.mobile";

export const FormBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <FormBlockMobile />}
      {currentSize === "desktop" && <FormBlockDesktop />}
    </>
  );
};
