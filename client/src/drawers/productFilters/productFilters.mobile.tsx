import { AppLoader } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useProductFiltersDrawerHelper } from "./productFilters.hook";

export const DrawerProductFiltersMobile = () => {
  const { i18n, loading } = useProductFiltersDrawerHelper();

  return (
    <AppDrawer
      id={DRAWERS.PRODUCT_FILTERS}
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
