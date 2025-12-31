import { ApiEndpoints } from "@api";
import { PAGES } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import { useStoreProduct } from "@store";
import React, { useEffect } from "react";

export const useProductDetailsPageHelper = () => {
  const searchParams = useAppSearchParams();
  const { goTo } = useNavigation();

  const isFetching = React.useRef(false);
  const cachedProductId = React.useRef<string | undefined>(undefined);

  const selectedProductInStore = useStoreProduct(
    (state) => state.selectedProduct
  );
  const setProductStoreState = useStoreProduct(
    (state) => state.setProductStoreState
  );
  const { fetchProductDetail } = ApiEndpoints.GetProductDetails();

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;
    setLoading(true);

    if (!searchParams.productId.value) {
      goTo({ path: PAGES.NOT_FOUND, addToHistory: false });
    }

    const res = await fetchProductDetail({
      productId: searchParams.productId.value || "",
    });

    setProductStoreState({ selectedProduct: res.data?.product });

    isFetching.current = false;
    setLoading(false);
  }, [fetchProductDetail, goTo, searchParams, setProductStoreState]);

  useEffect(() => {
    if (searchParams.productId.value !== cachedProductId.current) {
      cachedProductId.current = searchParams.productId.value;

      initScreen();
    }
  }, [
    initScreen,
    searchParams,
    searchParams.productId,
    selectedProductInStore,
    selectedProductInStore?.id,
  ]);

  useDidMount(() => {
    initScreen();
  });

  return {
    product: selectedProductInStore,
    loading,
  };
};
