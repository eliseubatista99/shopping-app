import { PAGES, SEARCH_PARAMS } from "@constants";
import {
  useDidMount,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useAppSearchParams } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

export const useProductBlockHelper = () => {
  const { productId } = useAppSearchParams();
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const { goTo } = useNavigation();

  const [loading, setLoading] = React.useState(true);

  const onClickBack = React.useCallback(() => {
    goTo({
      path: PAGES.PRODUCT_DETAILS,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: productId.value,
      },
      addToHistory: false,
    });
  }, [goTo, productId.value]);

  const initScreen = React.useCallback(async () => {
    setLoading(true);
    if (!productId.value) {
      goTo({ path: PAGES.NOT_FOUND, addToHistory: false });
    }

    if (!selectedProduct || selectedProduct.id !== productId.value) {
      onClickBack();
    }
    setLoading(false);
  }, [goTo, onClickBack, productId.value, selectedProduct]);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
    product: selectedProduct,
    onClickBack,
  };
};
