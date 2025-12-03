import { AppLayout } from "@components";
import { AuthenticateBlock, OptionsBlock } from "./blocks";
import { useSettingsPageHelper } from "./settings.hook";

export const SettingsMobile: React.FC = () => {
  const { isAuthenticated } = useSettingsPageHelper();

  return (
    <AppLayout
      appFooter
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#000000",
          },
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#ff7300ff",
        },
      }}
    >
      {isAuthenticated && <OptionsBlock />}
      {!isAuthenticated && <AuthenticateBlock />}
    </AppLayout>
  );
};
