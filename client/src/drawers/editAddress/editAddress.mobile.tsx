import { AddressForm } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useEditAddressDrawerHelper } from "./editAddress.hook";

export const DrawerEditAddressMobile = () => {
  const { i18n, canCloseDrawer, onClickSubmit, addressInEdit } =
    useEditAddressDrawerHelper();

  return (
    <AppDrawer
      id={DRAWERS.EDIT_ADDRESS}
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
      <AddressForm initialValue={addressInEdit} onSubmit={onClickSubmit} />
    </AppDrawer>
  );
};
