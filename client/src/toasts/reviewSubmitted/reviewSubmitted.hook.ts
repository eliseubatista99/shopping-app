import { useAppTranslations } from "@hooks";
import React from "react";

export const useReviewSubmittedToastHelper = () => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("toasts.reviewSubmitted.text"),
    };
  }, [t]);

  return {
    i18n,
  };
};
