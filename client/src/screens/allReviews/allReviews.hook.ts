import { useFetchGetProductReviews } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useAllReviewsPageHelper = () => {
  const { productId } = useAppSearchParams();
  const { fetch: fetchGetProductReviews } = useFetchGetProductReviews();

  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const setProductState = useStoreProduct((state) => state.setPartialState);
  const { goTo } = useNavigation();

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    setLoading(true);

    if (!productId.value) {
      goTo({ path: PAGES.NOT_FOUND, addToHistory: false });
      return;
    }

    if (!selectedProduct || selectedProduct.id !== productId.value) {
      goTo({
        path: PAGES.PRODUCT_DETAILS,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: productId.value,
        },
        addToHistory: false,
      });

      return;
    }

    const res = await fetchGetProductReviews({
      productId: selectedProduct?.id,
    });

    if (res.metadata.success) {
      setProductState({
        scoreCounts: res.data.scores,
        allReviews: res.data.reviews,
      });
    }

    setLoading(false);
  }, [
    fetchGetProductReviews,
    goTo,
    productId.value,
    selectedProduct,
    setProductState,
  ]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
    product: selectedProduct,
  };
};
