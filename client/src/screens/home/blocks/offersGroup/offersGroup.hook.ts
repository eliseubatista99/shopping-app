import { type ProductDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import React from "react";

export const useOffersGroupBlockHelper = () => {
  const { goTo } = useNavigation();
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

  return {
    onClickProduct,
  };
};
