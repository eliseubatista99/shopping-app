import {
  ProductsCombinationOverview,
  ProductsCombinationSelection,
} from "@components";
import { useCombinationBlockHelper } from "./combination.hook";

export const CombinationBlockMobile: React.FC = () => {
  const {
    canCombo,
    product,
    selectedItems,
    expanded,
    onClickExpand,
    onToggleSelectedItem,
    onClickAddToCart,
    onClickProduct,
  } = useCombinationBlockHelper();

  return (
    <>
      {canCombo && (
        <>
          {!expanded && product && (
            <ProductsCombinationOverview
              product={product}
              combinations={product?.comboProducts || []}
              onClickExpand={() => onClickExpand()}
              onClickProduct={(p) => onClickProduct(p)}
            />
          )}

          {expanded && product && (
            <ProductsCombinationSelection
              product={product}
              combinations={product?.comboProducts || []}
              selectedProducts={selectedItems}
              onClickProduct={(p) => onClickProduct(p)}
              onClickAddToCard={(products) => onClickAddToCart(products)}
              onToggleProduct={(item) => onToggleSelectedItem(item)}
            />
          )}
        </>
      )}
    </>
  );
};
