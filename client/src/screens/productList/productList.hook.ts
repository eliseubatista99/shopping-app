import { Api, type ProductDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useCart } from "@hooks";
import {
  useStoreAuthentication,
  useStoreProduct,
  type ProductFilters,
} from "@store";
import React from "react";

export const useProductListPageHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const { fetchSearchProducts } = Api.SearchProducts();
  const { goTo } = useNavigation();
  const searchParams = useAppSearchParams();
  const { addToCart } = useCart();

  const storeFilters = useStoreProduct((state) => state.filters);
  const setProductStoreState = useStoreProduct(
    (state) => state.setProductStoreState
  );

  const [initialized, setInitialized] = React.useState(false);
  const [products, setProducts] = React.useState<ProductDto[]>([]);

  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      goTo({
        path: PAGES.PRODUCT_DETAILS,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: product.id,
        },
      });
    },
    [goTo]
  );

  const onClickAddToCart = React.useCallback(
    (product: ProductDto) => {
      if (isAuthenticated) {
        addToCart([product.id || ""]);
      } else {
        goTo({ path: PAGES.LOG_IN });
      }
    },
    [addToCart, goTo, isAuthenticated]
  );

  const retrieveItems = React.useCallback(
    async (currentPage: number, pageSize: number, filters?: object) => {
      const parsedFilters = filters as ProductFilters | undefined;

      const res = await fetchSearchProducts({
        page: currentPage,
        pageCount: pageSize,
        keyword: parsedFilters?.text || "",
        scoreFilter: parsedFilters?.score,
      });

      if (res.metadata.success) {
        if (currentPage < 1) {
          setProducts(res.data.products || []);
        } else {
          setProducts((prevState) => [
            ...prevState,
            ...(res.data.products || []),
          ]);
        }
      }

      return {
        success: res.metadata.success,
        hasMorePages: res.data?.hasMorePages || false,
      };
    },
    [fetchSearchProducts]
  );

  const initScreen = React.useCallback(() => {
    setInitialized(false);
    setProductStoreState({
      filters: {
        text: searchParams.searchText.value || "",
      },
    });
    setInitialized(true);
  }, [searchParams.searchText.value, setProductStoreState]);

  useDidMount(() => {
    initScreen();
  });

  return {
    products,
    initialized,
    retrieveItems,
    onClickProduct,
    onClickAddToCart,
    storeFilters,
  };
};
