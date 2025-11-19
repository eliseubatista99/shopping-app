import React from "react";
import type { DocumentListItemProps } from "./documentListItem";

export const DocumentListItemMobile: React.FC<DocumentListItemProps> = (
  props
) => {
  const { document, onClick, styles } = props;

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        marginTop: "20px",
        gap: "10px",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      {document.id}
    </div>
  );
};
