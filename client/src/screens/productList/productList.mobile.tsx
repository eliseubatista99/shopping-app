import { AppLayout } from "@components";
import { FiltersBlock, ProductsBlock } from "./blocks";
import { useProductListPageHelper } from "./productList.hook";

export const ProductListMobile: React.FC = () => {
  useProductListPageHelper();

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
      <FiltersBlock />
      <ProductsBlock />
    </AppLayout>
  );
};
