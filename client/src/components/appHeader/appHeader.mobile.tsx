import { Assets } from "@assets";
import { INPUTS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { AppSearchBar } from "../appSearchBar";
import type { AppHeaderProps } from "./appHeader";
import { useAppHeaderHelper } from "./appHeader.hook";

export const AppHeaderMobile: React.FC<AppHeaderProps> = (props) => {
  const { i18n, handleSearchBarSubmit, handleSearchBarClick, handleClickBack } =
    useAppHeaderHelper(props);

  const { back, styles, searchBar } = props;

  return (
    <div
      data-testid="app-header"
      style={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
        borderBottom: "1px solid #00000067",
        flexDirection: "row",
        padding: "0 12px",
        minHeight: "75px",
        ...styles,
      }}
    >
      {back?.visible && (
        <Assets.Icons.ArrowLeft
          width="20px"
          height="20px"
          onClick={() => handleClickBack()}
          style={{ color: "#000000", ...back.styles }}
        />
      )}
      {searchBar?.visible && (
        <AppSearchBar
          name={INPUTS.SEARCH_BAR}
          placeholder={i18n.header.searchBar.placeholder}
          rightIcon={
            <Typography styles={{ fontSize: "30px", zIndex: 2 }}>
              {"⌕"}
            </Typography>
          }
          onSubmit={handleSearchBarSubmit}
          onFocus={handleSearchBarClick}
          styles={{ padding: "6px" }}
        />
      )}
    </div>
  );
};
