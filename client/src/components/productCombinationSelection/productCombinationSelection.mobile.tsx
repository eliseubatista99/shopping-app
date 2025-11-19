import type { ProductDto } from "@api";
import React from "react";
import { AppButton } from "../appButton";
import { AppCheckbox } from "../appCheckbox";
import { ProductsComboItem } from "../productComboItem";
import type { ProductsCombinationSelectionProps } from "./productCombinationSelection";
import { useProductsCombinationSelectionHelper } from "./productCombinationSelection.hook";

export const ProductsCombinationSelectionMobile: React.FC<
  ProductsCombinationSelectionProps
> = (props) => {
  const {
    i18n,
    product,
    combinations,
    currency,
    isSelected,
    combinationCost,
    addSelectedItemsToCard,
    selectedProducts,
  } = useProductsCombinationSelectionHelper(props);

  const { onClickProduct, onToggleProduct } = props;

  const renderItem = (item: ProductDto) => (
    <div
      key={item.id}
      style={{
        position: "relative",
        width: item.id === product.id ? "100%" : undefined,
        flexDirection: item.id === product.id ? "row" : "column",
        alignItems: "center",
        minHeight: "100px",
        background: "#e4e4e4ff",
        borderRadius: "8px",
        padding: "8px",
        gap: "5px",
      }}
    >
      <AppCheckbox
        checked={isSelected(item)}
        styles={{ position: "absolute", top: "6px", right: "6px", zIndex: 2 }}
        onToggle={(checked) => onToggleProduct?.(item, checked)}
      />
      <ProductsComboItem
        product={item}
        styles={{
          width: item.id === product.id ? "100%" : undefined,
          flexDirection: item.id === product.id ? "row" : "column",
        }}
        imageStyles={{
          width: item.id === product.id ? "130px" : "100%",
        }}
        onClick={() => onClickProduct?.(item)}
      />
    </div>
  );

  const combinationsJSX = combinations.map((comb) => renderItem(comb));

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        marginTop: "20px",
        gap: "10px",
      }}
    >
      {renderItem(product)}

      <div
        style={{
          width: "100%",
          gap: "10px",
          display: "grid",
          gridTemplateColumns:
            combinations.length > 1
              ? "repeat(auto-fit, calc(50% - 5px))"
              : "1fr",
          justifyContent: "center",
        }}
      >
        {combinationsJSX}
      </div>
      <AppButton
        text={{
          content: `${i18n.actions.addToCard}: ${combinationCost.toFixed(
            2
          )}${currency}`,
          props: {
            styles: {
              fontSize: "16px",
            },
          },
        }}
        styles={{
          padding: "18px 30px",
          width: "100%",
          marginTop: "10px",
          filter: selectedProducts.length > 0 ? undefined : "grayscale(100%)",
          pointerEvents: selectedProducts.length > 0 ? undefined : "none",
        }}
        onClick={() => addSelectedItemsToCard()}
      />
    </div>
  );
};
