import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ReviewsListDesktop } from "./reviewsList.desktop";
import { ReviewsListMobile } from "./reviewsList.mobile";

export interface ReviewsListProps {
  topContent?: React.ReactNode;
  showProductName?: boolean;
  styles?: React.CSSProperties;
}

export const ReviewsList: React.FC<ReviewsListProps> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ReviewsListMobile {...props} />}
      {currentSize === "desktop" && <ReviewsListDesktop {...props} />}
    </>
  );
};
