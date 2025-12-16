import type { ProductDto } from "@api";
import { ItemsListTemplate, ProductListItem } from "@components";
import { useProductsBlockHelper } from "./products.hook";

export const ProductsBlockMobile: React.FC = () => {
  const { products, onClickProduct, onClickAddToCart, filters, retrieveItems } =
    useProductsBlockHelper();

  const renderItem = (i: unknown) => {
    const item = i as ProductDto;

    return (
      <ProductListItem
        key={item.id}
        product={item}
        onClick={() => onClickProduct(item)}
        onClickAddToCart={() => onClickAddToCart(item)}
      />
    );
  };

  return (
    <ItemsListTemplate
      items={products}
      renderItem={renderItem}
      retrieveItems={retrieveItems}
      filters={filters}
    />
  );
};
