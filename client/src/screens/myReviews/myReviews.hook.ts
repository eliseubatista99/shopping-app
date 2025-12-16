import { useAppTranslations } from "@hooks";
import React from "react";

export const useMyReviewsPageHelper = () => {
  const { t } = useAppTranslations();

  console.log("ZAU MY REVIEWS");

  const i18n = React.useMemo(() => {
    return {
      title: t("myReviews.score.title"),
    };
  }, [t]);

  return {
    i18n,
  };
};
