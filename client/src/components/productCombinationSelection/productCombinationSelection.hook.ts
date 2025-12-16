import type { ProductDto } from "@api";
import { useAppTranslations } from "@hooks";
import { useStoreBase } from "@store";
import React from "react";
import type { ProductsCombinationSelectionProps } from "./productCombinationSelection";

export const useProductsCombinationSelectionHelper = ({
  product,
  combinations,
  selectedProducts,
  onClickAddToCard,
}: ProductsCombinationSelectionProps) => {
  const currency = useStoreBase((state) => state.currency);
  const { t } = useAppTranslations();

  const items = React.useMemo(() => {
    return [product, ...combinations];
  }, [combinations, product]);

  const i18n = React.useMemo(() => {
    return {
      actions: {
        addToCard: t("global.actions.addToCart.multiple", {
          count: selectedProducts.length,
        }),
      },
    };
  }, [selectedProducts.length, t]);

  const calculateCostOfCombination = React.useCallback(() => {
    let res = 0;

    selectedProducts.forEach((i) => {
      res += i.price || 0;
    });
    return res;
  }, [selectedProducts]);

  const isSelected = React.useCallback(
    (item: ProductDto) => {
      return selectedProducts.findIndex((i) => i.id === item.id) !== -1;
    },
    [selectedProducts]
  );

  const addSelectedItemsToCard = React.useCallback(() => {
    onClickAddToCard?.(selectedProducts);
  }, [onClickAddToCard, selectedProducts]);

  return {
    i18n,
    items,
    currency,
    combinations,
    selectedProducts,
    product,
    isSelected,
    combinationCost: calculateCostOfCombination(),
    addSelectedItemsToCard,
  };
};
