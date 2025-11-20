import type { ReviewDto } from "@api";
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ReviewListItemDesktop } from "./reviewListItem.desktop";
import { ReviewListItemMobile } from "./reviewListItem.mobile";

export interface ReviewListItemProps {
  review: ReviewDto;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

export const ReviewListItem: React.FC<ReviewListItemProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ReviewListItemMobile {...props} />}
      {currentSize === "desktop" && <ReviewListItemDesktop {...props} />}
    </>
  );
};
