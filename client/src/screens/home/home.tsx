import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { HomeDesktop } from "./home.desktop";
import { HomeMobile } from "./home.mobile";

export const Home: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <HomeMobile />}
      {currentSize === "desktop" && <HomeDesktop />}
    </>
  );
};
