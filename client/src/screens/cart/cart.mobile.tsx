import { AppLayout, AppLoader } from "@components";
import { ExecutionBlock, ProductsBlock } from "./blocks";
import { useCartPageHelper } from "./cart.hook";

export const CartMobile: React.FC = () => {
  const { loading } = useCartPageHelper();

  return (
    <AppLayout
      appHeader={{
        back: {
          visible: true,
          styles: {
            color: "#000000",
          },
        },
        searchBar: {
          visible: true,
        },
        styles: {
          background: "#ff7300ff",
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          <ExecutionBlock />
          <ProductsBlock />
        </>
      )}{" "}
    </AppLayout>
  );
};
