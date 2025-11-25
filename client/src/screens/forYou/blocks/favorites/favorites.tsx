import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { FavoritesBlockDesktop } from "./favorites.desktop";
import { FavoritesBlockMobile } from "./favorites.mobile";

export const FavoritesBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <FavoritesBlockMobile />}
      {currentSize === "desktop" && <FavoritesBlockDesktop />}
    </>
  );
};
