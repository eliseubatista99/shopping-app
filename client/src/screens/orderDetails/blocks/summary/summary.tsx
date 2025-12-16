import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { SummaryBlockDesktop } from "./summary.desktop";
import { SummaryBlockMobile } from "./summary.mobile";

export const SummaryBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <SummaryBlockMobile />}
      {currentSize === "desktop" && <SummaryBlockDesktop />}
    </>
  );
};
