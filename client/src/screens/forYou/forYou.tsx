import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ForYouDesktop } from "./forYou.desktop";
import { ForYouMobile } from "./forYou.mobile";

export const ForYou: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ForYouMobile />}
      {currentSize === "desktop" && <ForYouDesktop />}
    </>
  );
};

export default ForYou;
