import { Assets } from "@assets";
import { AppLayout } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useSettingsPageHelper } from "./settings.hook";

export const SettingsMobile: React.FC = () => {
  const { i18n, options } = useSettingsPageHelper();

  const optionsJSX = options.map((o) => (
    <div
      key={o.id}
      onClick={() => o.onClick()}
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #a0a0a0ff",
        borderRadius: "10px",
        padding: "12px 15px",
      }}
    >
      <Typography styles={{ fontSize: "18px" }}>{o.text}</Typography>
      <Assets.Icons.NavRight width="20px" height="20px" />
    </div>
  ));

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
      <Typography styles={{ fontSize: "22px", fontWeight: 600 }}>
        {i18n.title}
      </Typography>
      <div style={{ width: "100%", gap: "10px", marginTop: "10px" }}>
        {optionsJSX}
      </div>
    </AppLayout>
  );
};
