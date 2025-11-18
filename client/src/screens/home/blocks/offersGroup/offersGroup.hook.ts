import { type ProductDto } from "@api";
import { Pages } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useStoreProduct } from "@store";
import React from "react";

export const useOffersGroupBlockHelper = () => {
  const setProductStoreState = useStoreProduct(
    (state) => state.setPartialState
  );
  const { goTo } = useNavigation();
  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      setProductStoreState({ selectedProductId: product.id });
      goTo(Pages.productDetails);
    },
    [goTo, setProductStoreState]
  );

  return {
    onClickProduct,
  };
};
