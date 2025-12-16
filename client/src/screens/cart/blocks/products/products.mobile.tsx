import type { CartProductDto } from "@api";
import { CartProductListItem, ItemsListTemplate } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useProductsBlockHelper } from "./products.hook";

export const ProductsBlockMobile: React.FC = () => {
  const {
    i18n,
    selectAction,
    products,
    onClickRemoveFromCart,
    onClickChangeQuantity,
    onToggleProductSelection,
    retrieveItems,
  } = useProductsBlockHelper();

  const renderItem = (i: unknown) => {
    const item = i as CartProductDto;

    return (
      <CartProductListItem
        key={item.id}
        product={item}
        onClick={() => {
          //
        }}
        onClickRemoveCart={() => onClickRemoveFromCart(item)}
        onChangeQuantity={(value: number) => onClickChangeQuantity(item, value)}
        onClickSelected={(value) => onToggleProductSelection(item, value)}
      />
    );
  };

  return (
    <>
      {products.length > 0 && selectAction.visible && (
        <div
          onClick={() => selectAction.onClickToggleAll()}
          style={{ color: "#1b33abff" }}
        >
          <Typography styles={{ fontSize: "18px" }}>
            {i18n.actions.selection}
          </Typography>
        </div>
      )}
      <ItemsListTemplate
        items={products}
        renderItem={renderItem}
        retrieveItems={retrieveItems}
      />
    </>
  );
};
