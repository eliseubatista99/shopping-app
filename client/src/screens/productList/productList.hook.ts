import { useFetchSearchProducts, type ProductDto } from "@api";
import { Pages } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useStoreSearch } from "@store";
import React from "react";

export const useProductListPageHelper = () => {
  const isFetching = React.useRef(false);
  const searchText = useStoreSearch((state) => state.searchText);
  const setSearchStoreState = useStoreSearch((state) => state.setPartialState);
  const { fetch: fetchSearchProducts } = useFetchSearchProducts();
  const { goTo } = useNavigation();

  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState<ProductDto[]>([]);

  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      setSearchStoreState({ selectedProduct: product.id });
      goTo(Pages.productDetails);
    },
    [goTo, setSearchStoreState]
  );

  const searchProducts = React.useCallback(async () => {
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;
    setLoading(true);

    const res = await fetchSearchProducts({ keyword: searchText || "" });
    setProducts(res.products || []);

    isFetching.current = false;
    setLoading(false);
  }, [fetchSearchProducts, searchText, isFetching]);

  React.useEffect(() => {
    searchProducts();
  }, [searchProducts, searchText]);

  return {
    products,
    loading,
    onClickProduct,
  };
};
