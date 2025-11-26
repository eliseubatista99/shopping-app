import { useProductBlockHelper } from "./product.hook";

export const ProductBlockMobile: React.FC = () => {
  const { i18n } = useProductBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
