import { ApiEndpoints } from "@api";
import { useStoreCart } from "@store";
import { useCallback } from "react";

type SetProductsSelectedStateInput = {
  productId: string;
  selected: boolean;
};

type SetProductsQuantityInput = {
  productId: string | null | undefined;
  quantity: number;
};

export const useCart = () => {
  const { fetchAddToCart } = ApiEndpoints.AddToCard();
  const { fetchCart } = ApiEndpoints.GetCart();
  const { fetchRemoveFromCart } = ApiEndpoints.RemoveFromCart();
  const { fetchUpdateCartProduct } = ApiEndpoints.UpdateCartProduct();
  const itemsInBasket = useStoreCart((state) => state.products);
  const numberOfProductsInBasket = useStoreCart(
    (state) => state.numberOfProductsInBasket
  );
  const setItemsInBasket = useStoreCart((state) => state.setItemsInCart);

  const addToCart = useCallback(
    async (productIds: string[]) => {
      const res = await fetchAddToCart({ productIds });

      setItemsInBasket(res.data?.products || []);

      return res.data;
    },
    [fetchAddToCart, setItemsInBasket]
  );

  const removeFromCart = useCallback(
    async (productIds: string[]) => {
      const res = await fetchRemoveFromCart({ productIds });

      setItemsInBasket(res.data?.products || []);

      return res.data;
    },
    [fetchRemoveFromCart, setItemsInBasket]
  );

  const changeProductsQuantity = useCallback(
    async (input: SetProductsQuantityInput[]) => {
      const res = await fetchUpdateCartProduct({
        products: input.map((i) => ({
          productId: i.productId || "",
          quantity: i.quantity,
        })),
      });

      setItemsInBasket(res.data?.products || []);

      return res.data;
    },
    [fetchUpdateCartProduct, setItemsInBasket]
  );

  const setProductsSelectedState = useCallback(
    async (input: SetProductsSelectedStateInput[]) => {
      const res = await fetchUpdateCartProduct({
        products: input.map((i) => ({
          productId: i.productId || "",
          isSelected: i.selected,
        })),
      });

      setItemsInBasket(res.data?.products || []);

      return res.data;
    },
    [fetchUpdateCartProduct, setItemsInBasket]
  );

  const getCart = useCallback(async () => {
    const res = await fetchCart();

    setItemsInBasket(res.data?.products || []);

    return res;
  }, [fetchCart, setItemsInBasket]);

  return {
    getCart,
    addToCart,
    removeFromCart,
    itemsInBasket,
    numberOfProductsInBasket,
    setProductsSelectedState,
    changeProductsQuantity,
  };
};
