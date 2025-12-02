import { type ProductDto } from "@api";
import { PAGES, SEARCH_PARAMS } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useCart } from "@hooks";
import { useStoreAuthentication, useStoreProduct } from "@store";
import React from "react";

export const useCombinationBlockHelper = () => {
  const isAuthenticated = useStoreAuthentication(
    (state) => state.isAuthenticated
  );
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const { addToCart } = useCart();
  const { goTo } = useNavigation();

  const [expanded, setExpanded] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<ProductDto[]>([
    selectedProduct!,
    ...(selectedProduct?.comboProducts || []),
  ]);

  const onClickExpand = React.useCallback(() => {
    setExpanded(true);
  }, []);

  const onToggleSelectedItem = React.useCallback(
    (item: ProductDto) => {
      if (selectedItems.includes(item)) {
        setSelectedItems((prevItems) =>
          prevItems.filter((i) => i.id !== item.id)
        );
      } else {
        setSelectedItems((prevItems) => [...prevItems, item]);
      }
    },
    [selectedItems]
  );

  const onClickAddToCart = React.useCallback(
    (products: ProductDto[]) => {
      if (isAuthenticated) {
        addToCart(products.map((p) => p.id || ""));
      } else {
        goTo({ path: PAGES.LOG_IN });
      }
    },
    [addToCart, goTo, isAuthenticated]
  );

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
    product: selectedProduct,
    expanded,
    selectedItems,
    onClickExpand,
    onToggleSelectedItem,
    onClickAddToCart,
    onClickProduct,
  };
};
