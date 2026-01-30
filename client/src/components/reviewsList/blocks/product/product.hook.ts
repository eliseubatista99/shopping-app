import { PAGES, SEARCH_PARAMS } from "@constants";
import { useAppNavigation, useAppSearchParams } from "@hooks";
import { useStoreReviews } from "@store";
import React from "react";

export const useProductBlockHelper = () => {
  const { productId } = useAppSearchParams();

  const productName = useStoreReviews((state) => state.productName);
  const { goTo } = useAppNavigation();

  const onClickBack = React.useCallback(() => {
    goTo({
      path: PAGES.PRODUCT_DETAILS,
      params: {
        [SEARCH_PARAMS.PRODUCT_ID]: productId.value,
      },
      addToHistory: true,
    });
  }, [goTo, productId.value]);

  return {
    productName,
    onClickBack,
  };
};
