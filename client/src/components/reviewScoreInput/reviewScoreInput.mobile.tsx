import { Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { ReviewScoreInputProps } from "./reviewScoreInput";
import { useReviewScoreInputHelper } from "./reviewScoreInput.hook";

export const ReviewScoreInputMobile: React.FC<ReviewScoreInputProps> = (
  props
) => {
  const { i18n, scoreList, onClickStar } = useReviewScoreInputHelper(props);

  const { value, styles, starsSize = 30 } = props;

  const scoreJSX = scoreList.map((s, index) => (
    <s.icon
      width={`${starsSize}px`}
      height={`${starsSize}px`}
      style={{ objectFit: "contain", color: "#e99619ff" }}
      onClick={() => onClickStar(index + 1)}
    />
  ));

  return (
    <div
      data-testid="review-score-input"
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...styles,
      }}
    >
      <div
        style={{
          width: "100%",
          gap: "8px",
          flexDirection: "row",
        }}
      >
        {scoreJSX}
      </div>
      {value > 0 && (
        <div onClick={() => onClickStar(0)}>
          <Typography styles={{ fontSize: "16px", color: "#0a0d42ff" }}>
            {i18n.title}
          </Typography>
        </div>
      )}
    </div>
  );
};
