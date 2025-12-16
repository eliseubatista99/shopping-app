import { useStoreBase } from "@store";
import React from "react";
import type { ProductCheckoutItemProps } from "./productCheckoutItem";

export const useProductCheckoutItemHelper = ({
  onChangeQuantity,
}: ProductCheckoutItemProps) => {
  const currency = useStoreBase((state) => state.currency);

  const onClickChangeQuantity = React.useCallback(
    (value: number) => {
      onChangeQuantity?.(value);
    },
    [onChangeQuantity]
  );

  return { currency, onClickChangeQuantity };
};
