import { useFetchSearchProducts, type ProductDto } from "@api";
import { Pages, SEARCH_PARAMS } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import React from "react";

export const useProductListPageHelper = () => {
  const isFetching = React.useRef(false);
  const { fetch: fetchSearchProducts } = useFetchSearchProducts();
  const { goTo } = useNavigation();
  const searchParams = useAppSearchParams();

  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState<ProductDto[]>([]);

  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      goTo({
        path: Pages.productDetails,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: product.id,
        },
      });
    },
    [goTo]
  );

  const searchProducts = React.useCallback(async () => {
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;
    setLoading(true);

    const res = await fetchSearchProducts({
      keyword: searchParams.searchText.value || "",
    });
    setProducts(res.data.products || []);

    isFetching.current = false;
    setLoading(false);
  }, [searchParams.searchText.value, fetchSearchProducts]);

  useDidMount(() => {
    searchProducts();
  });

  return {
    products,
    loading,
    onClickProduct,
  };
};
