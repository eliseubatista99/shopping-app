import { AppLayout } from "@components";
import { AuthenticateBlock, ExecutionBlock, ProductsBlock } from "./blocks";
import { useCartPageHelper } from "./cart.hook";

export const CartMobile: React.FC = () => {
  const { isAuthenticated } = useCartPageHelper();

  return (
    <AppLayout
      appFooter
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
      {/* {loading && <AppLoader visible={loading} />} */}
      {/* {!loading && ( */}

      {isAuthenticated && (
        <>
          <ExecutionBlock />
          <ProductsBlock />
        </>
      )}
      {!isAuthenticated && <AuthenticateBlock />}

      {/* )}{" "} */}
    </AppLayout>
  );
};
