import { Api, type ProductDto } from "@api";
import { OVERLAYS, PAGES, SEARCH_PARAMS } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams, useCart } from "@hooks";
import { useStoreAuthentication, type ProductFilters } from "@store";
import React, { useMemo } from "react";

export const useProductsBlockHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const { fetchSearchProducts } = Api.SearchProducts();
  const { goTo } = useNavigation();
  const searchParams = useAppSearchParams();
  const { showItem, hideItem } = useFeedback();
  const { addToCart } = useCart();

  const [products, setProducts] = React.useState<ProductDto[]>([]);

  const filters = useMemo((): ProductFilters => {
    return {
      text: searchParams.searchText.value,
      score: searchParams.searchScore.value,
      maxPrice: searchParams.searchMaxPrice.value,
      minPrice: searchParams.searchMinPrice.value,
      bestSeller: searchParams.searchBestSeller.value,
      freeShipping: searchParams.searchFreeShipping.value,
      category: searchParams.searchCategory.value,
    };
  }, [
    searchParams.searchBestSeller.value,
    searchParams.searchCategory.value,
    searchParams.searchFreeShipping.value,
    searchParams.searchMaxPrice.value,
    searchParams.searchMinPrice.value,
    searchParams.searchScore.value,
    searchParams.searchText.value,
  ]);

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
    async (product: ProductDto) => {
      if (isAuthenticated) {
        showItem(OVERLAYS.LOADER);
        await addToCart([product.id || ""]);
        hideItem(OVERLAYS.LOADER);
      } else {
        goTo({ path: PAGES.LOG_IN });
      }
    },
    [addToCart, goTo, hideItem, isAuthenticated, showItem]
  );

  const retrieveItems = React.useCallback(
    async (currentPage: number, pageSize: number, filters?: object) => {
      const parsedFilters = filters as ProductFilters | undefined;

      const res = await fetchSearchProducts({
        page: currentPage,
        pageCount: pageSize,
        text: parsedFilters?.text,
        score: parsedFilters?.score,
        maxPrice: parsedFilters?.maxPrice,
        minPrice: parsedFilters?.minPrice,
        bestSeller: parsedFilters?.bestSeller,
        freeShipping: parsedFilters?.freeShipping,
        category: parsedFilters?.category,
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

  return {
    products,
    retrieveItems,
    onClickProduct,
    onClickAddToCart,
    filters,
  };
};
