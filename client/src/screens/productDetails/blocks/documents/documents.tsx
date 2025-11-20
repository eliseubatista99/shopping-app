import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { DocumentsBlockDesktop } from "./documents.desktop";
import { DocumentsBlockMobile } from "./documents.mobile";

export const DocumentsBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DocumentsBlockMobile />}
      {currentSize === "desktop" && <DocumentsBlockDesktop />}
    </>
  );
};
