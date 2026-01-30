import { type ProductDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import React from "react";
import { useAppNavigation } from "../../../../hooks";

export const useOffersGroupBlockHelper = () => {
  const { goTo } = useAppNavigation();
  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      goTo({
        path: PAGES.PRODUCT_DETAILS,
        params: {
          [SEARCH_PARAMS.PRODUCT_ID]: product.id,
        },
        addToHistory: true,
      });
    },
    [goTo],
  );

  return {
    onClickProduct,
  };
};
