import { Assets } from "@assets";
import { useAppTranslations } from "@hooks";
import React, { type FunctionComponent, type SVGProps } from "react";
import type { ProductScoreProps } from "./productScore";

type ScoreStar = {
  score: number;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

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
    const res: ScoreStar[] = [];

    for (let i = 1; i < 6; i++) {
      if (i > score) {
        if (i < score + 1) {
          res.push({
            score: 0.5,
            icon: Assets.Icons.StarHalf,
          });
        } else {
          res.push({
            score: 0,
            icon: Assets.Icons.StarEmpty,
          });
        }
      } else {
        res.push({
          score: 1,
          icon: Assets.Icons.StarFull,
        });
      }
    }
    return res;
  }, [score]);

  return { i18n, scoreList };
};
