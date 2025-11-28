import { useProductsBlockHelper } from "./products.hook";

export const ProductsBlockMobile: React.FC = () => {
  const { i18n } = useProductsBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
