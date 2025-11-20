import { Assets } from "@assets";
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductScoreProps } from "./productScore";
import { useProductScoreHelper } from "./productScore.hook";

export const ProductScoreMobile: React.FC<ProductScoreProps> = (props) => {
  const { i18n, scoreList } = useProductScoreHelper(props);
  const { onClick, starsSize = 10, withScoreText } = props;

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
        flexDirection: "row",
        position: "relative",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          gap: "1px",
          flexDirection: "row",
          position: "relative",
          height: `${starsSize}px`,
          display: "grid",
          minWidth: `${6 * starsSize}px`,
          gridTemplateColumns: `repeat(auto-fit, ${starsSize}px)`,
        }}
        onClick={() => onClick?.()}
      >
        {scoreStars}
      </div>
      {withScoreText && (
        <Typography styles={{ fontSize: "16px", fontWeight: 400 }}>
          {i18n.score}
        </Typography>
      )}
    </div>
  );
};
