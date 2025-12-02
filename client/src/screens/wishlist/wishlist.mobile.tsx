import { AppLayout, AppLoader } from "@components";
import { ProductsBlock } from "./blocks";
import { useWishlistPageHelper } from "./wishlist.hook";

export const WishlistMobile: React.FC = () => {
  const { loading } = useWishlistPageHelper();

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
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
          <ProductsBlock />
        </>
      )}
    </AppLayout>
  );
};
