import { AppLoader, ProductListItem } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useProductsBlockHelper } from "./products.hook";

export const ProductsBlockMobile: React.FC = () => {
  const {
    i18n,
    loading,
    products,
    onClickAddToCart,
    onClickProduct,
    onClickWishlist,
  } = useProductsBlockHelper();

  const productsJSX = products?.map((p) => (
    <ProductListItem
      key={p.id}
      product={p}
      onClick={() => onClickProduct(p)}
      onClickAddToCart={() => onClickAddToCart(p)}
      onClickWishlist={() => onClickWishlist(p)}
    />
  ));

  return (
    <>
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          <Typography styles={{ fontWeight: 600, fontSize: "20px" }}>
            {i18n.title}
          </Typography>
          <div
            style={{
              width: "100%",
              flexDirection: "column",
              padding: "10px 0px",
              gap: "5px",
            }}
          >
            {productsJSX}
          </div>
        </>
      )}
    </>
  );
};
