import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ProductScoreProps } from "./productScore";
import { useProductScoreHelper } from "./productScore.hook";

export const ProductScoreMobile: React.FC<ProductScoreProps> = (props) => {
  const { i18n, scoreList } = useProductScoreHelper(props);
  const { onClick, starsSize = 10, withScoreText, styles } = props;

  const scoreStars = scoreList.map((score, index) => {
    return (
      <score.icon
        width={`${starsSize}px`}
        height={`${starsSize}px`}
        key={index}
        style={{ objectFit: "contain", color: "#e99619ff" }}
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
        ...styles,
      }}
    >
      <div
        style={{
          gap: "1px",
          flexDirection: "row",
          position: "relative",
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
