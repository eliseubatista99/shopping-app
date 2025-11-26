import { Chip } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useOrderFiltersDrawerHelper } from "./orderFilters.hook";

export const DrawerOrderFiltersMobile = () => {
  const {
    i18n,
    sortOptions,
    statusOptions,
    onClickSortFilter,
    onClickStatusFilter,
    onClose,
  } = useOrderFiltersDrawerHelper();

  const sortOptionsJSX = sortOptions.map((s) => (
    <Chip
      key={s.option}
      text={s.text}
      onClick={() => onClickSortFilter(s.option)}
      styles={
        s.isSelected ? { color: "#ffffff", background: "#3a3a3aff" } : undefined
      }
    />
  ));

  const statusOptionsJSX = statusOptions.map((s) => (
    <Chip
      key={s.option}
      text={s.text}
      onClick={() => onClickStatusFilter(s.option)}
      styles={
        s.isSelected ? { color: "#ffffff", background: "#3a3a3aff" } : undefined
      }
    />
  ));

  return (
    <AppDrawer
      id={DRAWERS.ORDER_FILTERS}
      drawerStyles={{ gap: "12px" }}
      canBeClosed
      onClose={onClose}
    >
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
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {i18n.sort}
      </Typography>

      <div
        style={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {sortOptionsJSX}
      </div>

      <Typography
        styles={{
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {i18n.status}
      </Typography>

      <div
        style={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {statusOptionsJSX}
      </div>
    </AppDrawer>
  );
};
