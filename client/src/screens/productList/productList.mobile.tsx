import type { ProductDto } from "@api";
import { AppLayout, ItemsListTemplate, ProductListItem } from "@components";
import { useProductListPageHelper } from "./productList.hook";

export const ProductListMobile: React.FC = () => {
  const {
    products,
    initialized,
    onClickProduct,
    onClickAddToCart,
    filters,
    retrieveItems,
  } = useProductListPageHelper();

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
    <AppLayout
      pageStyles={{
        padding: 0,
      }}
      appFooter
      appHeader={{
        back: {
          visible: true,
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#0a0d42ff",
        },
      }}
    >
      {initialized && (
        <ItemsListTemplate
          items={products}
          renderItem={renderItem}
          retrieveItems={retrieveItems}
          filters={filters}
        />
      )}
    </AppLayout>
  );
};
