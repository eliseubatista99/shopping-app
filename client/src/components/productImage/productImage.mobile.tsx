import { Image } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductImageProps } from "./productImage";

export const ProductImageMobile: React.FC<ProductImageProps> = (props) => {
  const { image, onClick, styles: styles } = props;

  return (
    <div
      style={{
        width: "100%",
        flex: 1,
        zIndex: 0,
        aspectRatio: "1/1 important!",
        padding: "5px",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      <Image
        src={image || ""}
        styles={{
          width: "100%",
          height: "100%",
          aspectRatio: "1 / 1",
          objectFit: "contain",
          background: "none",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
};
