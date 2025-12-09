import { AppLoader } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useEditAddressDrawerHelper } from "./editAddress.hook";

export const DrawerEditAddressMobile = () => {
  const { i18n, loading } = useEditAddressDrawerHelper();

  return (
    <AppDrawer
      id={DRAWERS.EDIT_ADDRESS}
      canBeClosed={!loading}
      drawerStyles={{ gap: "12px" }}
    >
      <AppLoader
        visible={loading}
        styles={{ zIndex: 1, background: "#ffffff" }}
      />
      <Typography
        styles={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {i18n.text}
      </Typography>
    </AppDrawer>
  );
};
