import { Chip, ReviewScoreInput } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { useProductFiltersDrawerHelper } from "./productFilters.hook";

export const DrawerProductFiltersMobile = () => {
  const {
    i18n,
    sortOptions,
    newFilters,
    onClickSortFilter,
    onClickScoreFilter,
    onClose,
  } = useProductFiltersDrawerHelper();

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

  return (
    <AppDrawer
      id={DRAWERS.PRODUCT_FILTERS}
      childrenStyles={{ gap: "25px" }}
      canBeClosed
      onClose={onClose}
    >
      <Typography
        styles={{
          fontSize: "22px",
          fontWeight: 600,
        }}
      >
        {i18n.title}
      </Typography>

      <div style={{ width: "100%", gap: "15px" }}>
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
      </div>

      <div style={{ width: "100%", gap: "15px" }}>
        <Typography
          styles={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {i18n.score}
        </Typography>

        <ReviewScoreInput
          value={newFilters.score || 0}
          onClick={(value) => onClickScoreFilter(value)}
          styles={{ padding: "0 5px" }}
          starsSize={22}
        />
      </div>
    </AppDrawer>
  );
};
