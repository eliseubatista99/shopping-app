import { useAppTranslations } from "@hooks";
import React from "react";
import type { TryAgainSectionProps } from "./tryAgainSection";

export const useTryAgainSectionHelper = ({
  customI18n,
}: TryAgainSectionProps) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      text: customI18n?.text || t("tryAgainSection.message"),
      actions: {
        try: customI18n?.tryAgain || t("tryAgainSection.action.try"),
      },
    };
  }, [customI18n?.text, customI18n?.tryAgain, t]);

  return { i18n };
};
