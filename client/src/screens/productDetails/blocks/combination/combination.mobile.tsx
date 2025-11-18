import {
  ProductsCombinationOverview,
  ProductsCombinationSelection,
} from "@components";
import { useCombinationBlockHelper } from "./combination.hook";

export const CombinationBlockMobile: React.FC = () => {
  const {
    product,
    selectedItems,
    expanded,
    onClickExpand,
    onToggleSelectedItem,
  } = useCombinationBlockHelper();

  return (
    <>
      {!expanded && product && (
        <ProductsCombinationOverview
          product={product}
          combinations={product?.comboProducts || []}
          onClickExpand={() => onClickExpand()}
          onClickProduct={() => onClickExpand()}
        />
      )}

      {expanded && product && (
        <ProductsCombinationSelection
          product={product}
          combinations={product?.comboProducts || []}
          selectedProducts={selectedItems}
          onClickProduct={() => onClickExpand()}
          onClickAddToCard={() => onClickExpand()}
          onToggleProduct={(item) => onToggleSelectedItem(item)}
        />
      )}
    </>
  );
};
