import { Image } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductImageProps } from "./productImage";

export const ProductImageMobile: React.FC<ProductImageProps> = (props) => {
  const { image, onClick, styles, imageStyles } = props;

  return (
    <div
      style={{
        width: "100%",
        zIndex: 0,
        aspectRatio: "1/1",
        objectFit: "contain",
        background: "none",
        mixBlendMode: "multiply",
        borderRadius: "10px",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      <Image
        src={image || ""}
        styles={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "contain",
          background: "none",
          mixBlendMode: "multiply",
          borderRadius: styles?.["borderRadius"] ?? "10px",
          ...imageStyles,
        }}
      />
    </div>
  );
};
