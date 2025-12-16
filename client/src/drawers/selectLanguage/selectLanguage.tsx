import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DrawerSelectLanguageDesktop } from "./selectLanguage.desktop";
import { DrawerSelectLanguageMobile } from "./selectLanguage.mobile";

export const SelectLanguageDrawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DrawerSelectLanguageMobile />}
      {currentSize === "desktop" && <DrawerSelectLanguageDesktop />}
    </>
  );
};
