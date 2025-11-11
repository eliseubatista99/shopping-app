import type { ProductDto } from "@api";
import { useStoreBasketZustand } from "./basketStore";

export const useStoreBasket = () => {
  const { setPartialState, ...store } = useStoreBasketZustand();

  return {
    storeBasket: store,
    setBasketCount: (data: number) => {
      setPartialState({
        numberOfProductsInBasket: data,
      });
    },
    setItemsInBasket: (data: ProductDto[]) => {
      setPartialState({
        products: data,
        numberOfProductsInBasket: data.length,
      });
    },
  };
};
