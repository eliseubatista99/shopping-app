import { AddressForm } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useAddAddressDrawerHelper } from "./addAddress.hook";

export const DrawerAddAddressMobile = () => {
  const { i18n, canCloseDrawer, onClickSubmit } = useAddAddressDrawerHelper();

  return (
    <AppDrawer
      id={DRAWERS.ADD_ADDRESS}
      canBeClosed={canCloseDrawer}
      topContent={
        <Typography
          styles={{
            fontSize: "22px",
            fontWeight: 600,
            padding: "20px 20px 0 20px",
          }}
        >
          {i18n.title}
        </Typography>
      }
      drawerStyles={{ gap: "12px" }}
    >
      <AddressForm onSubmit={onClickSubmit} />
    </AppDrawer>
  );
};
