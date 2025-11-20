import { useAppTranslations } from "@hooks";
import React from "react";

export const useReviewBlockHelper = () => {
  const { t } = useAppTranslations();

  const [score, setScore] = React.useState<number>(0);

  const i18n = React.useMemo(() => {
    return {
      description: {
        title: t("writeReview.review.description.title"),
        placeholder: t("writeReview.review.description.placeholder"),
      },
      title: {
        title: t("writeReview.review.title.title"),
        placeholder: t("writeReview.review.title.placeholder"),
      },
    };
  }, [t]);

  const onScoreChange = (value: number) => {
    setScore(value);
  };

  return {
    i18n,
    score,
    onScoreChange,
  };
};
