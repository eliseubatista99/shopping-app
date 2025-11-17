import { Assets } from "@assets";
import { Image } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductScoreProps } from "./productScore";
import { useProductScoreHelper } from "./productScore.hook";

export const ProductScoreMobile: React.FC<ProductScoreProps> = (props) => {
  const { score, onClick } = props;

  const { scoreList } = useProductScoreHelper(props);

  const scoreStars = scoreList.map((scoreValue, index) => {
    let star = Assets.Icons.StarEmpty;

    if (scoreValue === 0.5) {
      star = Assets.Icons.StarHalf;
    } else if (scoreValue === 1) {
      star = Assets.Icons.StarFull;
    } else {
      star = Assets.Icons.StarEmpty;
    }

    return (
      <Image
        src={star}
        key={index}
        styles={{ height: "100%", objectFit: "contain" }}
      />
    );
  });

  return (
    <div
      data-testid="product-score"
      style={{
        gap: "1px",
        flexDirection: "row",
        position: "relative",
        height: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 10px)",
      }}
      onClick={() => onClick?.()}
    >
      {scoreStars}
    </div>
  );
};
