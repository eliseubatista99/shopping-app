import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ChangeEmailDesktop } from "./changeEmail.desktop";
import { ChangeEmailMobile } from "./changeEmail.mobile";

export const ChangeEmail: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ChangeEmailMobile />}
      {currentSize === "desktop" && <ChangeEmailDesktop />}
    </>
  );
};
