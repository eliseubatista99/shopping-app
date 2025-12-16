import type { ReviewDto } from "@api";
import { useAppTranslations } from "@hooks";
import React from "react";
import type { ReviewListItemProps } from "./reviewListItem";

type ReviewWithExpansion = ReviewDto & {
  isExpanded: boolean;
  canBeExpanded: boolean;
};

export const useReviewsListItemHelper = ({
  review: reviewData,
}: ReviewListItemProps) => {
  const { t } = useAppTranslations();
  const commentRef = React.useRef<HTMLDivElement>(null);

  const [review, setReview] = React.useState<ReviewWithExpansion>({
    ...reviewData,
    isExpanded: false,
    canBeExpanded: false,
  });

  const i18n = React.useMemo(() => {
    return {
      reviews: {
        expand: t("productDetails.reviews.expand"),
        seeAll: t("productDetails.reviews.seeAll"),
        create: t("productDetails.reviews.create"),
      },
    };
  }, [t]);

  const onClickExpand = React.useCallback(() => {
    setReview((prevState) => ({ ...prevState, isExpanded: true }));
  }, []);

  React.useEffect(() => {
    if (commentRef.current) {
      if (commentRef.current.clientHeight > 120) {
        setReview((prevState) => ({ ...prevState, canBeExpanded: true }));
      }
    }
  }, [commentRef]);

  return {
    i18n,
    review,
    commentRef,
    onClickExpand,
  };
};
