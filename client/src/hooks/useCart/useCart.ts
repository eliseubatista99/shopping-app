import { Api } from "@api";
import { useStoreCart } from "@store";
import { useCallback } from "react";

export const useCart = () => {
  const { fetchAddToCart } = Api.AddToCard();
  const { fetchCart } = Api.GetCart();
  const itemsInBasket = useStoreCart((state) => state.products);
  const numberOfProductsInBasket = useStoreCart(
    (state) => state.numberOfProductsInBasket
  );
  const setItemsInBasket = useStoreCart((state) => state.setItemsInCart);

  const addToCart = useCallback(
    async (productIds: string[]) => {
      const res = await fetchAddToCart({ productIds });

      setItemsInBasket(res.data?.products || []);

      return res.data.products || [];
    },
    [fetchAddToCart, setItemsInBasket]
  );

  const getCart = useCallback(async () => {
    const res = await fetchCart();

    setItemsInBasket(res.data?.products || []);

    return res.data.products || [];
  }, [fetchCart, setItemsInBasket]);

  return {
    getCart,
    addToCart,
    itemsInBasket,
    numberOfProductsInBasket,
  };
};
