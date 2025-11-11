import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ExploreDesktop } from "./explore.desktop";
import { ExploreMobile } from "./explore.mobile";

export const Explore: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ExploreMobile />}
      {currentSize === "desktop" && <ExploreDesktop />}
    </>
  );
};

export default Explore;
