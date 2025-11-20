import { useAppTranslations } from "@hooks";
import React from "react";

export const useNotFound404PageHelper = () => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("notFound404.title"),
    };
  }, [t]);

  return {
    i18n,
  };
};
