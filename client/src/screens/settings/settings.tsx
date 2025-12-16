import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SettingsDesktop } from "./settings.desktop";
import { SettingsMobile } from "./settings.mobile";

export const Settings: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SettingsMobile />}
      {currentSize === "desktop" && <SettingsDesktop />}
    </>
  );
};
