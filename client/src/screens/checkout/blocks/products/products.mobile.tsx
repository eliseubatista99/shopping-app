import { ProductCheckoutItem, Separator } from "@components";
import { useProductsBlockHelper } from "./products.hook";

export const ProductsBlockMobile: React.FC = () => {
  const { products, onChangeProductQuantity } = useProductsBlockHelper();

  const productsJSX = products.map((p) => (
    <ProductCheckoutItem
      key={p.product?.id}
      product={p}
      onChangeQuantity={(value) => onChangeProductQuantity(p, value)}
    />
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
