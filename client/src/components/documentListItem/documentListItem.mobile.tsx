import { Assets } from "@assets";
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
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
        flexDirection: "row",
        gap: "10px",
        padding: "10px 0",
        alignItems: "center",
        color: "#0a0d42ff",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      <Image
        src={Assets.Icons.Document}
        styles={{
          width: "20px",
          height: "20px",
        }}
      />
      <Typography styles={{ fontSize: "16px", fontWeight: 500 }}>
        {document.name}
      </Typography>
    </div>
  );
};
