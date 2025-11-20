import { Assets } from "@assets";
import { Inputs } from "@constants";
import React from "react";
import { AppSearchBar } from "../appSearchBar";
import type { AppHeaderProps } from "./appHeader";
import { useAppHeaderHelper } from "./appHeader.hook";

export const AppHeaderMobile: React.FC<AppHeaderProps> = (props) => {
  const {
    i18n,
    handleSearchBarSubmit,
    handleSearchBarChange,
    handleSearchBarClick,
    handleClickBack,
  } = useAppHeaderHelper(props);

  const { back, styles } = props;

  return (
    <div
      data-testid="app-header"
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        background: "#ffffff",
        borderBottom: "1px solid #00000067",
        flexDirection: "row",
        padding: "0 12px",
        ...styles,
      }}
    >
      {back?.visible && (
        <Assets.Icons.ArrowLeft
          width="20px"
          height="20px"
          onClick={() => handleClickBack()}
          style={{ color: "#ffffff", ...back.styles }}
        />
      )}
      <AppSearchBar
        name={Inputs.searchBar}
        placeholder={i18n.header.searchBar.placeholder}
        onChange={handleSearchBarChange}
        onSubmit={handleSearchBarSubmit}
        onClick={handleSearchBarClick}
        styles={{ padding: "6px" }}
      />
    </div>
  );
};
