import React from "react";
import { AppSearchBar } from "../appSearchBar";
import type { AppHeaderProps } from "./appHeader";
import { useAppHeaderHelper } from "./appHeader.hook";

export const AppHeaderMobile: React.FC<AppHeaderProps> = (props) => {
  const {
    i18n,
    handleSearchBarSubmit,
    searchBarInputName,
    handleSearchBarChange,
  } = useAppHeaderHelper(props);

  return (
    <div
      data-testid="app-header"
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "12px",
      }}
    >
      <AppSearchBar
        name={searchBarInputName}
        placeholder={i18n.header.searchBar.placeholder}
        onChange={handleSearchBarChange}
        onSubmit={handleSearchBarSubmit}
      />
    </div>
  );
};
