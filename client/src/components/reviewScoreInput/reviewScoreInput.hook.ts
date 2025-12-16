import { Assets } from "@assets";
import { useAppTranslations } from "@hooks";
import React, { type FunctionComponent, type SVGProps } from "react";
import type { ReviewScoreInputProps } from "./reviewScoreInput";

type ScoreStar = {
  score: number;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export const useReviewScoreInputHelper = ({
  value,
  onClick,
}: ReviewScoreInputProps) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("reviewScoreInput.clear"),
    };
  }, [t]);

  const onClickStar = (index?: number) => {
    if (index !== undefined && index > 5) {
      index = 5;
    } else if (index !== undefined && index < 0) {
      index = 0;
    }

    onClick?.(index);
  };

  const scoreList = React.useMemo(() => {
    const res: ScoreStar[] = [];

    for (let i = 1; i < 6; i++) {
      if (i > value) {
        res.push({
          score: 0,
          icon: Assets.Icons.StarEmpty,
        });
      } else {
        res.push({
          score: 1,
          icon: Assets.Icons.StarFull,
        });
      }
    }
    return res;
  }, [value]);

  return {
    i18n,
    scoreList,
    onClickStar,
  };
};
