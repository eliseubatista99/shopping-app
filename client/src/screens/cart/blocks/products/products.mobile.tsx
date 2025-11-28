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
    />
  ));

  return (
    <>
      {loading && <AppLoader visible={loading} />}

      <div style={{ color: "#1b33abff" }}>
        <Typography>{i18n.actions.selection}</Typography>
      </div>
      <div style={{ width: "100%", gap: "10px" }}>{productsJSX}</div>
    </>
  );
};
