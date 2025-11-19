import type { DocumentDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { DocumentListItemDesktop } from "./documentListItem.desktop";
import { DocumentListItemMobile } from "./documentListItem.mobile";

export interface DocumentListItemProps {
  document: DocumentDto;
  onClick?: () => void;
  styles?: React.CSSProperties;
}

export const DocumentListItem: React.FC<DocumentListItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <DocumentListItemMobile {...props} />}
      {currentSize === "desktop" && <DocumentListItemDesktop {...props} />}
    </>
  );
};
