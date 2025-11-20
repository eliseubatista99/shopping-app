import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ProductScoreDesktop } from "./productScore.desktop";
import { ProductScoreMobile } from "./productScore.mobile";

export interface ProductScoreProps {
  score: number;
  starsSize?: number;
  withScoreText?: boolean;
  onClick?: () => void;
}

export const ProductScore: React.FC<ProductScoreProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductScoreMobile {...props} />}
      {currentSize === "desktop" && <ProductScoreDesktop {...props} />}
    </>
  );
};
