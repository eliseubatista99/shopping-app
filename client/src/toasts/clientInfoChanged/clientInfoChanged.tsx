import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ClientInfoChangedToastDesktop } from "./clientInfoChanged.desktop";
import { ClientInfoChangedToastMobile } from "./clientInfoChanged.mobile";

export const ClientInfoChangedToast: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ClientInfoChangedToastMobile />}
      {currentSize === "desktop" && <ClientInfoChangedToastDesktop />}
    </>
  );
};

