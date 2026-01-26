import { Image } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductImageProps } from "./productImage";

export const ProductImageMobile: React.FC<ProductImageProps> = (props) => {
  const { image, onClick, styles: styes } = props;

  return (
    <Image
      src={image || ""}
      onClick={() => onClick?.()}
      styles={{
        width: "100%",
        border: "1px solid #8a8a8a52",
        flex: 1,
        zIndex: 0,
        aspectRatio: "1 / 1",
        objectFit: "contain",
        background: "none",
        mixBlendMode: "multiply",
        padding: "5px",
        ...styes,
      }}
    />
  );
};
