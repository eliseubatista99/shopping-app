import { useAppTranslations } from "@hooks";
import React from "react";
import type { QuantityFieldProps } from "./quantityField";

export const useQuantityFieldHelper = ({
  currentQuantity,
  maxQuantity,
  minQuantity,
  onChange,
}: QuantityFieldProps) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      quantity: t("global.quantityField.placeholder", {
        value: currentQuantity,
      }),
    };
  }, [currentQuantity, t]);

  const canDecrease = React.useCallback(() => {
    const minQuantityFinal = minQuantity || 1;
    return currentQuantity > minQuantityFinal;
  }, [currentQuantity, minQuantity]);

  const canIncrease = React.useCallback(() => {
    const maxQuantityFinal = maxQuantity || 99;

    return currentQuantity < maxQuantityFinal;
  }, [currentQuantity, maxQuantity]);

  const onChangeQuantity = React.useCallback(
    (amount: number) => {
      let newQuantity = currentQuantity + amount;
      const maxQuantityFinal = maxQuantity || 99;
      const minQuantityFinal = minQuantity || 1;

      if (newQuantity > maxQuantityFinal) {
        newQuantity = maxQuantityFinal;
      } else if (newQuantity < minQuantityFinal) {
        newQuantity = minQuantityFinal;
      }

      if (newQuantity !== currentQuantity) {
        onChange?.(newQuantity);
      }
    },
    [currentQuantity, maxQuantity, minQuantity, onChange]
  );

  return {
    i18n,
    onChangeQuantity,
    canDecrease: canDecrease(),
    canIncrease: canIncrease(),
  };
};
