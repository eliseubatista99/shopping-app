import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { RelatedBlockDesktop } from "./related.desktop";
import { RelatedBlockMobile } from "./related.mobile";

export const RelatedBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <RelatedBlockMobile />}
      {currentSize === "desktop" && <RelatedBlockDesktop />}
    </>
  );
};
