import { useAppTranslations } from "@hooks";
import React from "react";
import type { QuantityFieldProps } from "./quantityField";

export const useQuantityFieldHelper = ({
  currentQuantity,
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

  const onChangeQuantity = React.useCallback(
    (amount: number) => {
      const newQuantity = currentQuantity + amount;
      onChange?.(newQuantity);
    },
    [currentQuantity, onChange]
  );

  return {
    i18n,
    onChangeQuantity,
  };
};
