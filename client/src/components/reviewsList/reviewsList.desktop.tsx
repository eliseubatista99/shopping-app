import React from "react";
import type { ReviewsListProps } from "./reviewsList";
import { ReviewsListMobile } from "./reviewsList.mobile";

export const ReviewsListDesktop: React.FC<ReviewsListProps> = (props) => {
  return <ReviewsListMobile {...props} />;
};
