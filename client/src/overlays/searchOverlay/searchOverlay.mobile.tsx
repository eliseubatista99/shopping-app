import { AppHeader } from "@components";
import { Overlays } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppOverlay } from "../_appOverlay";
import { useOverlaySearchHelper } from "./searchOverlay.hook";

export const OverlaySearchMobile: React.FC = () => {
  const { previousSearches, submitSearch, onClickBack } =
    useOverlaySearchHelper();

  const previousSearchesJSX = previousSearches?.map((p, index) => (
    <div
      key={index}
      style={{
        width: "100%",
        flexDirection: "row",
        borderTop: index === 0 ? undefined : "1px solid #5f5f5f54",
        padding: "10px 15px",
        gap: "20px",
      }}
      onClick={() => submitSearch(p)}
    >
      <Typography styles={{ fontSize: "24px", fontWeight: 500 }}>
        {"⌕"}
      </Typography>
      <Typography styles={{ lineHeight: 2 }}>{p}</Typography>
    </div>
  ));

  return (
    <AppOverlay id={Overlays.search} styles={{ background: "#ffffff" }}>
      <AppHeader
        withBack
        onClickBack={() => onClickBack()}
        onSearchBarSubmit={(value) => submitSearch(value)}
        styles={{ background: "#0a0d42ff" }}
      />
      <div style={{ width: "100%", flexDirection: "column" }}>
        {previousSearchesJSX}
      </div>
    </AppOverlay>
  );
};
