import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SearchDesktop } from "./search.desktop";
import { SearchMobile } from "./search.mobile";

export const Search: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SearchMobile />}
      {currentSize === "desktop" && <SearchDesktop />}
    </>
  );
};
export default Search;
