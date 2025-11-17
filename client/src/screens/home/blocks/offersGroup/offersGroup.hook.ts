import { type ProductDto } from "@api";
import { Pages } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useStoreSearch } from "@store";
import React from "react";

export const useOffersGroupBlockHelper = () => {
  const setSearchStoreState = useStoreSearch((state) => state.setPartialState);
  const { goTo } = useNavigation();
  const onClickProduct = React.useCallback(
    (product: ProductDto) => {
      setSearchStoreState({ selectedProduct: product.id });
      goTo(Pages.productDetails);
    },
    [goTo, setSearchStoreState]
  );

  return {
    onClickProduct,
  };
};
