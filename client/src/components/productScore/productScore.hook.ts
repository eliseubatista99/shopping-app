import React from "react";
import type { ProductScoreProps } from "./productScore";

export const useProductScoreHelper = ({ score }: ProductScoreProps) => {
  const scoreList = React.useMemo(() => {
    return [1, 1, 1, 0.5, 0];
  }, [score]);

  return {
    scoreList,
  };
};
