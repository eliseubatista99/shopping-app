import { useAppTranslations } from "@hooks";
import React from "react";

export const useScoreBlockHelper = () => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("block.title"),
    };
  }, [t]);

  return {
    i18n,
  };
};
