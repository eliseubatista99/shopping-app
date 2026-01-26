import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { Assets } from "../../assets";
import { ProductScore } from "../productScore";
import type { ReviewListItemProps } from "./reviewListItem";
import { useReviewsListItemHelper } from "./reviewListItem.hook";

export const ReviewListItemMobile: React.FC<ReviewListItemProps> = (props) => {
  const { i18n, review, commentRef, onClickExpand } =
    useReviewsListItemHelper(props);

  const { styles, onClick } = props;

  return (
    <div
      data-testid="review-list-item"
      style={{
        width: "100%",
        gap: "8px",
        borderTop: "1px solid #b1b1b14d",
        padding: "20px 0",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            border: "1px solid #a3a3a3ff",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {review.reviewerIcon && (
            <Image
              src={review.reviewerIcon}
              styles={{
                width: "100%",
                height: "100%",
              }}
            />
          )}
          {!review.reviewerIcon && (
            <Assets.Icons.DefaultAvatar width="75%" height="75%" />
          )}
        </div>

        <Typography styles={{ fontWeight: 400, fontSize: "16px" }}>
          {review.reviewerName}
        </Typography>
      </div>
      <ProductScore starsSize={14} score={review.score} />
      <Typography styles={{ fontWeight: 600, fontSize: "16px" }}>
        {review.title}
      </Typography>
      <div ref={commentRef} style={{ width: "100%" }}>
        <Typography
          overflowEllipsis
          maxNumberOfLines={review.isExpanded ? undefined : 8}
          styles={{
            overflowWrap: "break-word",
            width: "100%",
            fontWeight: 300,
            fontSize: "16px",
          }}
        >
          {review.comment}
        </Typography>
        {!review.isExpanded && review.canBeExpanded && (
          <div onClick={() => onClickExpand()} style={{ color: "#0a0d42ff" }}>
            <Typography>{i18n.reviews.expand}</Typography>
          </div>
        )}
      </div>
    </div>
  );
};
