import { Assets } from "@assets";
import { TOASTS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppToast } from "../_appToast";
import { useClientInfoChangedToastHelper } from "./clientInfoChanged.hook";

export const ClientInfoChangedToastMobile = () => {
  const { i18n } = useClientInfoChangedToastHelper();

  return (
    <AppToast id={TOASTS.CLIENT_INFO_CHANGED} styles={{ width: "60%" }}>
      <div
        style={{
          padding: "7px",
          aspectRatio: "1/1",
          borderRadius: "50%",
          background: "#2cb200ff",
        }}
      >
        <Assets.Icons.Check width="20px" height="20px" />
      </div>
      <Typography>{i18n.title}</Typography>
    </AppToast>
  );
};
