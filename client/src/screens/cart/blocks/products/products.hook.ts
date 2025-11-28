import type { CartProductDto } from "@api";
import { useAppTranslations, useCart } from "@hooks";
import { useStoreCart } from "@store";
import React from "react";

export const useProductsBlockHelper = () => {
  const { t } = useAppTranslations();
  const { changeProductsQuantity, removeFromCart } = useCart();
  const products = useStoreCart((state) => state.products);
  const [loading, setLoading] = React.useState(false);

  const i18n = React.useMemo(() => {
    return {
      actions: {
        selectAll: t("cart.products.actions.selectAll"),
        unselectAll: t(t("cart.products.actions.unselectAll")),
      },
    };
  }, [t]);

  const onClickRemoveFromCart = React.useCallback(
    async (product: CartProductDto) => {
      setLoading(true);
      await removeFromCart([product.id || ""]);
      setLoading(false);
    },
    [removeFromCart]
  );

  const onClickChangeQuantity = React.useCallback(
    async (product: CartProductDto, value: number) => {
      if (value > 0) {
        setLoading(true);
        await changeProductsQuantity([
          { productId: product.id, quantity: value },
        ]);
        setLoading(false);
      } else {
        await onClickRemoveFromCart(product);
      }
    },
    [changeProductsQuantity, onClickRemoveFromCart]
  );

  return {
    i18n,
    loading,
    products: products || [],
    onClickChangeQuantity,
    onClickRemoveFromCart,
  };
};
