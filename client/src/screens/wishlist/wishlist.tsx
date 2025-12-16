import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { WishlistDesktop } from "./wishlist.desktop";
import { WishlistMobile } from "./wishlist.mobile";

export const Wishlist: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <WishlistMobile />}
      {currentSize === "desktop" && <WishlistDesktop />}
    </>
  );
};
