import { Assets } from "@assets";
import { INPUTS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppSearchBar } from "src/components/appSearchBar";
import { useFiltersBlockHelper } from "./filters.hook";

export const FiltersBlockMobile: React.FC = () => {
  const {
    i18n,
    isSearchFocused,
    submitSearch,
    onSearchBarBlur,
    onSearchBarFocus,
    onClickFilters,
  } = useFiltersBlockHelper();

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "row",
        paddingTop: "2px",
        borderBottom: "2px solid #969696ff",
      }}
    >
      <AppSearchBar
        name={INPUTS.ORDERS_SEARCH}
        placeholder={i18n.placeholder}
        onSubmit={submitSearch}
        onFocus={onSearchBarFocus}
        onBlur={onSearchBarBlur}
        leftIcon={
          <Typography
            styles={{
              fontSize: "30px",
              zIndex: 2,
              transform: "scaleX(-1)",
            }}
          >
            {"⌕"}
          </Typography>
        }
        formStyles={{ gap: 0 }}
        styles={
          isSearchFocused
            ? { width: "100%", padding: 0 }
            : { width: "100%", padding: 0 }
        }
        inputFieldStyles={{
          styles: { maxWidth: "100%", padding: 0 },
          containerStyles: {
            margin: 0,
            padding: "0 10px",
            borderRadius: 0,
            border: "none",
          },
          // inputStyles: { padding: 0 },
        }}
      />
      {!isSearchFocused && (
        <div
          onClick={() => onClickFilters()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid #969696ff",
            padding: "0 10px",
          }}
        >
          <Typography styles={{ fontSize: "14px" }}>{i18n.filters}</Typography>
          <Assets.Icons.NavRight width="20px" height="20px" />
        </div>
      )}
    </div>
  );
};
