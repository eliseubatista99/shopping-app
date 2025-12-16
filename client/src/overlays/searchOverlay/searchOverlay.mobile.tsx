import { Assets } from "@assets";
import { AppHeader } from "@components";
import { OVERLAYS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppOverlay } from "../_appOverlay";
import { useOverlaySearchHelper } from "./searchOverlay.hook";

export const OverlaySearchMobile: React.FC = () => {
  const {
    previousSearches,
    submitSearch,
    onClickBack,
    clickSearchFromHistory,
    clickRemoveEntry,
  } = useOverlaySearchHelper();

  const previousSearchesJSX = previousSearches?.map((p, index) => (
    <div
      key={index}
      style={{
        width: "100%",
        flexDirection: "row",
        borderTop: index === 0 ? undefined : "1px solid #5f5f5f54",
        padding: "10px 15px",
        gap: "20px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        onClick={() => clickSearchFromHistory(p)}
        style={{ flexDirection: "row", gap: "20px", alignItems: "center" }}
      >
        <Typography styles={{ fontSize: "24px", fontWeight: 500 }}>
          {"⌕"}
        </Typography>
        <Typography styles={{ lineHeight: 2 }}>{p?.value}</Typography>
      </div>
      <Assets.Icons.Close
        width="15px"
        height="15px"
        onClick={() => clickRemoveEntry(p)}
      />
    </div>
  ));

  return (
    <AppOverlay id={OVERLAYS.SEARCH} styles={{ background: "#ffffff" }}>
      <AppHeader
        back={{
          visible: true,
          onClick: () => onClickBack(),
          styles: { color: "#ffffff" },
        }}
        searchBar={{
          visible: true,
          onSearchBarSubmit: (value) => submitSearch(value),
        }}
        styles={{ background: "#0a0d42ff" }}
      />
      <div style={{ width: "100%", flexDirection: "column" }}>
        {previousSearchesJSX}
      </div>
    </AppOverlay>
  );
};
