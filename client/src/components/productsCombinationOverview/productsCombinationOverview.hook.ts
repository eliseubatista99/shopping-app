import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";
import type { ProductsCombinationOverviewProps } from "./productsCombinationOverview";

export const useProductsCombinationOverviewHelper = ({
  product,
  combinations,
}: ProductsCombinationOverviewProps) => {
  const currency = useStoreBase((state) => state.currency);
  const { t } = useAppTranslations();

  const items = React.useMemo(() => {
    return [product, ...combinations];
  }, [combinations, product]);

  const i18n = React.useMemo(() => {
    return {
      collapsed: {
        totalCost: t("productDetails.combinations.collapsed.totalCost", {
          count: items.length,
        }),
      },
    };
  }, [items.length, t]);

  const calculateCostOfCombination = React.useCallback(() => {
    let res = 0;

    items.forEach((i) => {
      res += i.price || 0;
    });
    return res;
  }, [items]);

  return {
    i18n,
    items,
    currency,
    combinationCost: calculateCostOfCombination(),
  };
};
