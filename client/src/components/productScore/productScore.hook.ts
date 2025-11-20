import { useAppTranslations } from "@hooks";
import React from "react";
import type { ProductScoreProps } from "./productScore";

export const useProductScoreHelper = ({ score }: ProductScoreProps) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      score: t("global.score.countOfMax", {
        score: score,
        max: 5,
      }),
    };
  }, [score, t]);

  const scoreList = React.useMemo(() => {
    const res: number[] = [];

    for (let i = 1; i < 6; i++) {
      if (i > score) {
        if (i < score + 1) {
          res.push(0.5);
        } else {
          res.push(0);
        }
      } else {
        res.push(1);
      }
    }
    return res;
  }, [score]);

  return { i18n, scoreList };
};
