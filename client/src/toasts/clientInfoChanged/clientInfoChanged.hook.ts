import { useAppTranslations } from "@hooks";
import React from "react";

export const useClientInfoChangedToastHelper = () => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("toasts.clientInfoChanged.text"),
    };
  }, [t]);

  return {
    i18n,
  };
};

