import { ProductCheckoutItem, Separator } from "@components";
import { useProductsBlockHelper } from "./products.hook";

export const ProductsBlockMobile: React.FC = () => {
  const { products } = useProductsBlockHelper();

  const productsJSX = products.map((p) => (
    <ProductCheckoutItem key={p.id} product={p} />
  ));

  return (
    <>
      <Separator styles={{ marginTop: "20px" }} />
      <div style={{ width: "100%", gap: "6px", marginTop: "20px" }}>
        {productsJSX}
      </div>
    </>
  );
};
