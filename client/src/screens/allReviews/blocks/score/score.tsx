import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ScoreBlockDesktop } from "./score.desktop";
import { ScoreBlockMobile } from "./score.mobile";

export const ScoreBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ScoreBlockMobile />}
      {currentSize === "desktop" && <ScoreBlockDesktop />}
    </>
  );
};
