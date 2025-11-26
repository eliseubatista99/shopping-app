import { Chip } from "@components";
import { DRAWERS } from "@constants";
import { RadioButton, Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useOrderFiltersDrawerHelper } from "./orderFilters.hook";

export const DrawerOrderFiltersMobile = () => {
  const {
    i18n,
    sortOptions,
    statusOptions,
    dateOptions,
    onClickSortFilter,
    onClickStatusFilter,
    onClickDateFilter,
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

  const dateOptionsJSX = dateOptions.map((d) => (
    <div
      key={`${d.startDate}-${d.endDate}`}
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <RadioButton
        checked={d.isSelected}
        onClick={() => {
          onClickDateFilter(d.startDate, d.endDate);
        }}
      />
      <Typography>{d.text}</Typography>
    </div>
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

      <Typography
        styles={{
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {i18n.date}
      </Typography>

      <div
        style={{
          width: "100%",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {dateOptionsJSX}
      </div>
    </AppDrawer>
  );
};
