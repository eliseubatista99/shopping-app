import { AppLayout, AppLoader, ProductListItem } from "@components";
import { useProductListPageHelper } from "./productList.hook";

export const ProductListMobile: React.FC = () => {
  const { products, loading, onClickProduct } = useProductListPageHelper();

  const productsJSX = products?.map((p) => (
    <ProductListItem
      key={p.id}
      product={p}
      onClick={() => onClickProduct(p)}
      onClickAddToCart={() => console.log("ZAU ADDED TO CART")}
    />
  ));

  return (
    <AppLayout
      pageStyles={{
        padding: 0,
      }}
      appHeader={{
        withBack: true,
        styles: {
          background: "#0a0d42ff",
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <div
          style={{ width: "100%", flexDirection: "column", padding: "10px 0" }}
        >
          {productsJSX}
        </div>
      )}
    </AppLayout>
  );
};
