import { Api } from "@api";
import { useStoreCart } from "@store";
import { useCallback } from "react";

type SetProductsSelectedStateInput = {
  productId: string;
  selected: boolean;
};

type SetProductsQuantityInput = {
  productId: string | undefined;
  quantity: number;
};

export const useCart = () => {
  const { fetchAddToCart } = Api.AddToCard();
  const { fetchCart } = Api.GetCart();
  const { fetchRemoveFromCart } = Api.RemoveFromCart();
  const { fetchUpdateCartProduct } = Api.UpdateCartProduct();
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
          id: i.productId,
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
          id: i.productId,
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
