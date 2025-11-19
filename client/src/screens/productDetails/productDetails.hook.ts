import { useFetchProductDetail } from "@api";
import { useDidMount } from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useProductDetailsPageHelper = () => {
  const searchParams = useAppSearchParams();

  const isFetching = React.useRef(false);
  const selectedProductInStore = useStoreProduct(
    (state) => state.selectedProduct
  );
  const setProductStoreState = useStoreProduct(
    (state) => state.setPartialState
  );
  const { fetch: fetchProductDetail } = useFetchProductDetail();

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;
    setLoading(true);

    const res = await fetchProductDetail({
      productId: searchParams.productId.value || "",
    });

    setProductStoreState({ selectedProduct: res.data.product });

    isFetching.current = false;
    setLoading(false);
  }, [fetchProductDetail, searchParams, setProductStoreState]);

  useDidMount(() => {
    initScreen();
  });

  return {
    product: selectedProductInStore,
    loading,
  };
};
