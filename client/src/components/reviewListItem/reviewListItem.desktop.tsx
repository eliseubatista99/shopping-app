import React from "react";
import type { ReviewListItemProps } from "./reviewListItem";
import { ReviewListItemMobile } from "./reviewListItem.mobile";

export const ReviewListItemDesktop: React.FC<ReviewListItemProps> = (props) => {
  return <ReviewListItemMobile {...props} />;
};
