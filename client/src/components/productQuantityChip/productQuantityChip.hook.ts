import React from "react";
import type { ProductQuantityChipProps } from "./productQuantityChip";

export const useProductQuantityChipHelper = ({
  value,
  onChange,
}: ProductQuantityChipProps) => {
  const onClickClear = React.useCallback(() => {
    onChange?.(0);
  }, [onChange]);

  const onChangeQuantity = React.useCallback(
    (dir: number) => {
      let newValue = value + dir;

      if (newValue < 0) {
        newValue = 0;
      }
      onChange?.(newValue);
    },
    [onChange, value]
  );

  return { onClickClear, onChangeQuantity };
};
