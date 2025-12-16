import {
  AppCheckbox,
  AppNumericInputField,
  Chip,
  ReviewScoreInput,
} from "@components";
import { DRAWERS, INPUTS } from "@constants";
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
    onClickBestSeller,
    onClickFreeShipping,
    price,
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

      <div style={{ width: "100%" }}>
        <Typography
          styles={{
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          {i18n.price}
        </Typography>
        <div
          style={{
            display: "grid",
            gap: "4px",
            gridTemplateColumns: "0.5fr 0.5fr",
          }}
        >
          <AppNumericInputField
            name={INPUTS.MIN_VALUE}
            placeHolder={i18n.filters.price.min.placeholder}
            initialValue={
              newFilters.minPrice ? newFilters.minPrice.toString() : undefined
            }
            onChange={(value) => price.onChangeMinPrice(value)}
            max={999999}
            styles={{ width: undefined, overflow: "hidden" }}
            containerStyles={{ padding: 0 }}
            inputStyles={{
              padding: "0",
              maxWidth: "100%",
              textAlign: "center",
            }}
          />
          <AppNumericInputField
            name={INPUTS.MAX_VALUE}
            placeHolder={i18n.filters.price.max.placeholder}
            initialValue={
              newFilters.maxPrice ? newFilters.maxPrice.toString() : undefined
            }
            max={999999}
            onChange={(value) => price.onChangeMaxPrice(value)}
            styles={{ width: undefined, overflow: "hidden" }}
            containerStyles={{ padding: 0 }}
            inputStyles={{
              padding: "0",
              maxWidth: "100%",
              textAlign: "center",
            }}
          />
        </div>
        {price.priceError && (
          <Typography
            styles={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#de1616ff",
            }}
          >
            {price.priceError}
          </Typography>
        )}
      </div>

      <div style={{ width: "100%", gap: "15px", marginTop: "10px" }}>
        <AppCheckbox
          name={INPUTS.FREE_SHIPPING}
          label={i18n.freeShipping}
          checked={(newFilters.freeShipping || false) as boolean}
          onToggle={onClickFreeShipping}
        />

        <AppCheckbox
          name={INPUTS.BEST_SELLER}
          label={i18n.bestSeller}
          checked={(newFilters.bestSeller || false) as boolean}
          onToggle={onClickBestSeller}
        />
      </div>
    </AppDrawer>
  );
};
