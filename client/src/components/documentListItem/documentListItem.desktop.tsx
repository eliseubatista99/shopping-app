import React from "react";
import type { DocumentListItemProps } from "./documentListItem";
import { DocumentListItemMobile } from "./documentListItem.mobile";

export const DocumentListItemDesktop: React.FC<DocumentListItemProps> = (
  props
) => {
  return <DocumentListItemMobile {...props} />;
};
