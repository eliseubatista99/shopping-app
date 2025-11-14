import { useFetchSearchProducts, type ProductDto } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useStoreSearch } from "@store";
import React from "react";

export const useProductListPageHelper = () => {
  const searchText = useStoreSearch((state) => state.searchText);
  const { fetch: fetchSearchProducts } = useFetchSearchProducts();

  const [products, setProducts] = React.useState<ProductDto[]>([]);

  const initScreen = React.useCallback(async () => {
    const res = await fetchSearchProducts({ keyword: searchText || "" });
    setProducts(res.products || []);
  }, [fetchSearchProducts, searchText]);

  useDidMount(() => {
    initScreen();
  });

  return {
    products,
  };
};
