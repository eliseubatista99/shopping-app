import { Pages, SEARCH_PARAMS } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useWriteReviewPageHelper = () => {
  const { productId } = useAppSearchParams();
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const { goTo } = useNavigation();

  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    setLoading(true);
    if (!productId.value) {
      goTo({ path: Pages.notFound404, addToHistory: false });
    }

    if (!selectedProduct || selectedProduct.id !== productId.value) {
      goTo({
        path: Pages.productDetails,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: productId.value,
        },
        addToHistory: false,
      });
    }
    setLoading(false);
  }, [goTo, productId.value, selectedProduct]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
    product: selectedProduct,
  };
};
