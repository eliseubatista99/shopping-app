import type { ProductDto } from "@api";
import { AppLoader, ItemsListTemplate, ProductListItem } from "@components";
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
    retrieveItems,
  } = useProductsBlockHelper();

  const renderItem = (i: unknown) => {
    const item = i as ProductDto;

    return (
      <ProductListItem
        key={item.id}
        product={item}
        onClick={() => onClickProduct(item)}
        onClickAddToCart={() => onClickAddToCart(item)}
        onClickWishlist={() => onClickWishlist(item)}
      />
    );
  };

  return (
    <>
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          <Typography styles={{ fontWeight: 600, fontSize: "20px" }}>
            {i18n.title}
          </Typography>
          <ItemsListTemplate
            items={products}
            renderItem={renderItem}
            retrieveItems={retrieveItems}
          />
        </>
      )}
    </>
  );
};
