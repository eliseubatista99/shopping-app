import { AppLayout, AppLoader, AuthenticatedScreen } from "@components";
import { PAGES } from "@constants";
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
      <AuthenticatedScreen returnPage={PAGES.WISHLIST}>
        {loading && <AppLoader visible={loading} />}
        {!loading && (
          <>
            <ProductsBlock />
          </>
        )}
      </AuthenticatedScreen>
    </AppLayout>
  );
};
