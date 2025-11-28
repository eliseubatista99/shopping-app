import { AppLoader, CartProductListItem } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useProductsBlockHelper } from "./products.hook";

export const ProductsBlockMobile: React.FC = () => {
  const {
    i18n,
    loading,
    products,
    onClickRemoveFromCart,
    onClickChangeQuantity,
    onToggleProductSelection,
    onClickToggleAll,
  } = useProductsBlockHelper();

  const productsJSX = products.map((p) => (
    <CartProductListItem
      key={p.id}
      product={p}
      onClick={() => {
        //
      }}
      onClickRemoveCart={() => onClickRemoveFromCart(p)}
      onChangeQuantity={(value: number) => onClickChangeQuantity(p, value)}
      onClickSelected={(value) => onToggleProductSelection(p, value)}
    />
  ));

  return (
    <>
      {loading && <AppLoader visible={loading} />}

      <div onClick={() => onClickToggleAll()} style={{ color: "#1b33abff" }}>
        <Typography styles={{ fontSize: "18px" }}>
          {i18n.actions.selection}
        </Typography>
      </div>
      <div style={{ width: "100%", gap: "10px", marginTop: "15px" }}>
        {productsJSX}
      </div>
    </>
  );
};
