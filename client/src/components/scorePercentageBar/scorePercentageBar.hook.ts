import { useAppTranslations } from "@hooks";
import React from "react";
import type { ScorePercentageBarProps } from "./scorePercentageBar";

export const useScorePercentageBarHelper = ({
  score,
  percentage,
}: ScorePercentageBarProps) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      text:
        score > 1
          ? t("scoreBar.score.stars.multiple", { count: score })
          : t("scoreBar.score.stars.single"),
    };
  }, [score, t]);

  return { i18n, percentage: Math.round(percentage) };
};
