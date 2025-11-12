import { Drawers } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useSelectAddressDrawerHelper } from "./selectAddress.hook";

export const DrawerSelectAddressMobile = () => {
  const { handleOnDrawerClosed } = useSelectAddressDrawerHelper();
  return (
    <AppDrawer
      id={Drawers.selectAddress}
      handle={{
        render: (
          <div
            style={{
              width: "30px",
              height: "5px",
              borderRadius: "10px",
              background: "#4e4e4eff",
            }}
          />
        ),
      }}
      onCloseDrawer={() => handleOnDrawerClosed()}
    >
      <Typography
        styles={{
          color: "#4d4d4d",
          fontSize: "14px",
          fontWeight: 600,
          textAlign: "center",
          marginTop: "12px",
          minHeight: "24px",
        }}
      >
        {"Select the type"}
      </Typography>
      <div
        style={{
          flexDirection: "column",
          width: "100%",
          padding: "0 32px",
          gap: "12px",
          marginTop: "32px",
          overflow: "auto",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          styles={{
            color: "#4d4d4d",
            fontSize: "14px",
            fontWeight: 600,
            textAlign: "center",
            marginTop: "12px",
            minHeight: "24px",
          }}
        >
          {"Select the type"}
        </Typography>
      </div>
    </AppDrawer>
  );
};
