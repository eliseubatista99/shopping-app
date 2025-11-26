import { useFetchAddToCart } from "@api";
import { useStoreBasket } from "@store";
import { useCallback } from "react";

export const useCart = () => {
  const { fetchAddToCart } = useFetchAddToCart();
  const itemsInBasket = useStoreBasket((state) => state.products);
  const numberOfProductsInBasket = useStoreBasket(
    (state) => state.numberOfProductsInBasket
  );
  const setItemsInBasket = useStoreBasket((state) => state.setItemsInBasket);

  const addToCart = useCallback(
    async (productIds: string[]) => {
      const res = await fetchAddToCart({ productIds });

      setItemsInBasket(res.data?.cart?.products || []);
    },
    [fetchAddToCart, setItemsInBasket]
  );

  return {
    addToCart,
    itemsInBasket,
    numberOfProductsInBasket,
  };
};
