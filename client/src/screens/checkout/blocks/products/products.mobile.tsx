import { useProductsBlockHelper } from "./products.hook";

export const ProductsBlockMobile: React.FC = () => {
  const { i18n } = useProductsBlockHelper();

  return <div style={{ width: "100%", gap: "6px" }}></div>;
};
