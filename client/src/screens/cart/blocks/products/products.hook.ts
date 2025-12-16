import type { CartProductDto } from "@api";
import { OVERLAYS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations, useCart } from "@hooks";
import { useStoreCart } from "@store";
import React from "react";

export const useProductsBlockHelper = () => {
  const { t } = useAppTranslations();
  const { changeProductsQuantity, removeFromCart, setProductsSelectedState } =
    useCart();
  const products = useStoreCart((state) => state.products);
  const [showSelectAction, setShowSelectAction] = React.useState(false);
  const { getCart } = useCart();
  const { showItem, hideItem } = useFeedback();

  const allProductsSelected = React.useMemo(
    () => !((products || []).findIndex((p) => !p.isSelected) !== -1),
    [products]
  );

  const i18n = React.useMemo(() => {
    return {
      actions: {
        selection: allProductsSelected
          ? t("cart.products.actions.unselectAll")
          : t("cart.products.actions.selectAll"),
      },
    };
  }, [allProductsSelected, t]);

  const retrieveItems = React.useCallback(async () => {
    setShowSelectAction(false);
    const res = await getCart();
    setShowSelectAction(true);

    return {
      success: res.metadata.success,
      hasMorePages: false,
    };
  }, [getCart]);

  const onClickRemoveFromCart = React.useCallback(
    async (product: CartProductDto) => {
      showItem(OVERLAYS.LOADER);
      await removeFromCart([product.id || ""]);
      hideItem(OVERLAYS.LOADER);
    },
    [hideItem, removeFromCart, showItem]
  );

  const onToggleProductSelection = React.useCallback(
    async (product: CartProductDto, value: boolean) => {
      showItem(OVERLAYS.LOADER);
      await setProductsSelectedState([
        { productId: product.id || "", selected: value },
      ]);
      hideItem(OVERLAYS.LOADER);
    },
    [hideItem, setProductsSelectedState, showItem]
  );

  const onClickToggleAll = React.useCallback(async () => {
    showItem(OVERLAYS.LOADER);
    await setProductsSelectedState(
      (products || []).map((p) => ({
        productId: p.id || "",
        selected: !allProductsSelected,
      }))
    );

    hideItem(OVERLAYS.LOADER);
  }, [
    allProductsSelected,
    hideItem,
    products,
    setProductsSelectedState,
    showItem,
  ]);

  const onClickChangeQuantity = React.useCallback(
    async (product: CartProductDto, value: number) => {
      showItem(OVERLAYS.LOADER);

      if (value > 0) {
        await changeProductsQuantity([
          { productId: product.id, quantity: value },
        ]);
      } else {
        await onClickRemoveFromCart(product);
      }
      hideItem(OVERLAYS.LOADER);
    },
    [changeProductsQuantity, hideItem, onClickRemoveFromCart, showItem]
  );

  return {
    i18n,
    selectAction: {
      visible: showSelectAction,
      onClickToggleAll,
    },
    products: products || [],
    onClickChangeQuantity,
    onClickRemoveFromCart,
    onToggleProductSelection,

    retrieveItems,
  };
};
