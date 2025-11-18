import { type ProductDto } from "@api";
import { useStoreProduct } from "@store";
import React from "react";

export const useCombinationBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);

  const [expanded, setExpanded] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<ProductDto[]>(
    selectedProduct?.comboProducts || []
  );

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

  return {
    product: selectedProduct,
    expanded,
    selectedItems,
    onClickExpand,
    onToggleSelectedItem,
  };
};
