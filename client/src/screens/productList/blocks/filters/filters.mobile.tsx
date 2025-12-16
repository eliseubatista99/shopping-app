import { Assets } from "@assets";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useFiltersBlockHelper } from "./filters.hook";

export const FiltersBlockMobile: React.FC = () => {
  const { i18n, onClickFilters } = useFiltersBlockHelper();

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "row",
        paddingTop: "2px",
        borderBottom: "2px solid #969696ff",
      }}
    >
      <div
        onClick={() => onClickFilters()}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid #969696ff",
          padding: "10px 10px",
        }}
      >
        <Typography styles={{ fontSize: "14px" }}>{i18n.filters}</Typography>
        <Assets.Icons.NavRight width="20px" height="20px" />
      </div>
    </div>
  );
};
