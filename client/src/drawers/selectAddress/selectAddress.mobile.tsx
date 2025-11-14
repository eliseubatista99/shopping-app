import { AddressSelectItem, AppButton, AppLoader } from "@components";
import { Drawers } from "@constants";
import {
  Carousel,
  Typography,
  type CarouselSlideProps,
} from "@eliseubatista99/react-scaffold-core";
import { AddressHelper } from "@helpers";
import { AppDrawer } from "../_appDrawer";
import { useSelectAddressDrawerHelper } from "./selectAddress.hook";

export const DrawerSelectAddressMobile = () => {
  const {
    i18n,
    addresses,
    selectedAddress,
    handleAddressSelected,
    handleSubmit,
    loading,
  } = useSelectAddressDrawerHelper();

  const addressesJSX = (addresses || []).map((a): CarouselSlideProps => {
    const isSelected = AddressHelper.equals(a, selectedAddress);

    return {
      content: (
        <AddressSelectItem
          onClick={() => handleAddressSelected(a)}
          key={`${a.postalCode}-${a.street}`}
          address={a}
          styles={
            isSelected
              ? {
                  border: "1px solid #da5f18ff",
                  background: "#ffeadeff",
                }
              : undefined
          }
        />
      ),
    };
  });

  return (
    <AppDrawer
      id={Drawers.selectAddress}
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
        {i18n.title}
      </Typography>
      <Typography
        styles={{
          fontSize: "14px",
        }}
      >
        {i18n.subtitle}
      </Typography>
      <Carousel content={addressesJSX} settings={{ slidesToShow: 2 }} />

      <AppButton
        text={{
          content: i18n.button,
        }}
        onClick={handleSubmit}
      />
    </AppDrawer>
  );
};
